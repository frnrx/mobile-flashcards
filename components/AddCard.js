import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { addCardToDeck } from '../utils/api.js'

export default class AddCard extends React.Component {

    state = {
        question: "",
        answer: ""
    }

    _onPress = () => {
        if(this.state.question !== "" && this.state.answer !== "")
        {
            addCardToDeck(this.props.navigation.state.params, this.state.question, this.state.answer)
            this.props.navigation.goBack()            
        }
        else{
            Alert.alert(
                'Undefined Field',
                'Please, enter the question and the answer of the card.',
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
              );
        }
        console.log('pressed');
    }
    
    render() {        
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Question'
                    style={styles.input}
                    onChangeText={(question) => this.setState({ 'question': question })}
                    value={this.state.text}
                />
                <TextInput
                    placeholder='Answer'
                    style={styles.input}
                    onChangeText={(answer) => this.setState({ 'answer': answer })}
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
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        textAlign: 'center'
    },
});
