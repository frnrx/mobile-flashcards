import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckView extends React.Component {

  _onPress = () => {
    const { id } = this.props.navigation.state.params
    console.log('PRESSED');
    this.props.navigation.navigate('AddCard', id)
  }

  render() {
    // console.log('LOG HERE: '+JSON.stringify(this.props.navigation.state.params));
    const { title, cards } = this.props.navigation.state.params

    const lenght = cards.push()
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{fontSize: 20, marginBottom: 40}}>{cards.push()} cards</Text>
        <TouchableOpacity style={styles.button}><Text style={{fontSize: 20}} onPress={this._onPress()}>Add Card</Text></TouchableOpacity>
        {lenght === 0 
        ? null 
        : <TouchableOpacity style={styles.button}><Text style={{fontSize: 20}}>Start Quiz</Text></TouchableOpacity>}
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
