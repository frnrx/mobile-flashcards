import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Quiz extends Component {

    state = {
        count: 0,
        side: true,
        answers: []
    }

    _onPress = (type) => {
        if (type === 'correct' || type === 'incorrect') {
            let newArray = this.state.answers
            let currentCount = this.state.count
            newArray.push(type)
            console.log(newArray);
            this.setState({
                answers: newArray,
                count: currentCount + 1
            })
            console.log(this.state);
        }
        if (type === 'switch') {
            let currentSide = this.state.side
            this.setState({
                side: !currentSide
            })
        }
    }

    render() {
        const cards = this.props.navigation.state.params
        const { count, side } = this.state
        // countPlus = count + 1
        lenght = cards.push()

        return (
            <View style={styles.container}>
                {count < lenght
                    ? <View style={styles.container}>
                        <Text style={styles.count}>{`${count + 1} / ${lenght}`}</Text>
                        <View style={styles.box}>
                            <Text style={styles.title}>
                                {side
                                    ? cards[count].question
                                    : cards[count].answer
                                }
                            </Text>
                            <TouchableOpacity style={styles.linkButton} onPress={() => this._onPress('switch')}>
                                <Text style={{color: 'red'}}>
                                    {side
                                        ? 'Answer'
                                        : 'Question'
                                    }
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.greenButton} onPress={() => this._onPress('correct')}>
                                <Text style={{color: 'white'}}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.redButton} onPress={() => this._onPress('incorrect')}>
                                <Text style={{color: 'white'}}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : <View style={styles.box}>
                        <Text style={styles.title}>DONE!</Text>
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                                <Text style={{color: 'white'}}>Back</Text>
                            </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        height: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        margin: 10
    },
    title: {
        margin: 20,
        textTransform: 'uppercase',
        fontSize: 40
    },
    greenButton: {
        height: 60,
        width: 150,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    redButton: {
        height: 60,
        width: 150,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    backButton: {
        height: 60,
        width: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    linkButton: {
        height: 60,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
});
