import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckView extends React.Component {

  state = {
    deck: {}
  }

  _onPress = () => {
    this.props.navigation.navigate('Quiz', this.props.navigation.state.params.cards)
  }

  render() {
    const { title, cards } = this.props.navigation.state.params
    const { navigate } = this.props.navigation
    const lenght = cards.push()

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardsText}>{cards.push()} cards</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('AddCard', title)}>
          <Text style={styles.text}>Add Card</Text>
        </TouchableOpacity>
        {lenght === 0
          ? null
          : <TouchableOpacity style={styles.button} onPress={() => this._onPress()}><Text style={styles.text}>Start Quiz</Text></TouchableOpacity>}
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
  },
  cardsText: {
    fontSize: 20, 
    marginBottom: 40
  },
  text: {
    fontSize: 20
  }
});
