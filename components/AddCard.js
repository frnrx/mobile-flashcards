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
            addCardToDeck(this.props.navigation.state.params, this.state.question, this.state.answer, this.props.navigation)
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
    
    _onChange = (input, text) => {
        if(input === 'question'){
            this.setState({ 'question': text })
        }
        else{
            this.setState({ 'answer': text })
        }
    }

    render() {        
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Question'
                    style={styles.input}
                    onChangeText={(question) => this._onChange('question', question)}
                    value={this.state.text}
                />
                <TextInput
                    placeholder='Answer'
                    style={styles.input}
                    onChangeText={(answer) => this._onChange('answer', answer)}
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
