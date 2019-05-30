import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/api.js'

export default class DeckView extends React.Component {

  state = {
    deck: {}
  }

  _onPress = () => {
    const { title } = this.props.navigation.state.params
    console.log('PRESSED ' + title);
    this.props.navigation.navigate('AddCard', title)
    // console.log(this.props.navigation);

  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    const { deck } = this.state

    getDeck(title).then((res) => {
      deck = res
        this.setState({
          deck: deck
        })
    })
    // clearAllData()
    // deckList.map((item) => console.log('ITEM: '+item));
}

  checkUpdate = () => {
    const { title } = this.props.navigation.state.params

    getDeck(title).then((res) => {
      res !== this.state.deck
        ? this.setState({ deck: res })
        : null
    })
  }

  render() {
    // console.log('LOG HERE: '+JSON.stringify(this.props.navigation.state.params));
    const { title, cards, id } = this.props.navigation.state.params
    const { navigate } = this.props.navigation
    const lenght = cards.push()

    this.checkUpdate()

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ fontSize: 20, marginBottom: 40 }}>{cards.push()} cards</Text>
        <TouchableOpacity style={styles.button} onPress={() => this._onPress()}>
          <Text style={{ fontSize: 20 }}>Add Card</Text>
        </TouchableOpacity>
        {lenght === 0
          ? null
          : <TouchableOpacity style={styles.button}><Text style={{ fontSize: 20 }}>Start Quiz</Text></TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 20,
    textTransform: 'uppercase',
    fontSize: 40
  },
  button: {
    height: 60,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
