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
            let currentCount = this.state.count
            if (type === 'correct') {
                let newArray = this.state.answers
                newArray.push(type)
                this.setState({
                    answers: newArray,
                })
            }
            this.setState({
                count: currentCount + 1
            })
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
        const { count, side, answers } = this.state

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
                                <Text style={{ color: 'red' }}>
                                    {side
                                        ? 'Answer'
                                        : 'Question'
                                    }
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.greenButton} onPress={() => this._onPress('correct')}>
                                <Text style={{ color: 'white' }}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.redButton} onPress={() => this._onPress('incorrect')}>
                                <Text style={{ color: 'white' }}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : <View style={styles.box}>
                        <Text style={styles.title}>DONE!</Text>
                        <Text style={styles.subtitle}>{`You answered ${((answers.push()) * 100 / (cards.push())).toFixed(0)}% of the questions correctly.`}</Text>
                        <TouchableOpacity style={styles.backButton} onPress={() => this.setState({ count: 0 })}>
                            <Text style={{ color: 'white' }}>Repeat Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                            <Text style={{ color: 'white' }}>Back to Deck</Text>
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
    subtitle: {
        margin: 40,
        marginBottom: 80,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
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
