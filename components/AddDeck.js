import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { saveDeckTitle } from '../utils/api.js'

export default class AddDeck extends React.Component {

    state = {
        text: ""
    }

    _onPress = () => {
        if(this.state.text !== "")
        {
            let deck = saveDeckTitle(this.state.text)
            this.props.navigation.navigate('DeckView', deck)
        }
        else{
            Alert.alert(
                'Title Undefined',
                'Please, enter the title of the deck.',
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
              );
        }
        console.log('pressed');
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.text}>What's the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.input} onPress={this._onPress}><Text>Submit</Text></TouchableOpacity>
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
    input: {
        height: 60,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    text: {
        fontSize: 30,
        margin: 50,
        justifyContent: 'center',
    }
});
