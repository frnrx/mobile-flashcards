import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getDecks, clearAllData, logAllData } from '../utils/api.js'

export default class DeckList extends React.Component {

    state = {
        deckList: undefined,
        loading: true
    }

    componentWillMount() {
        let deckList
        getDecks().then((res) => {
            deckList = res
            this.setState({
                deckList: deckList
            })
        })
        // clearAllData()
        // deckList.map((item) => console.log('ITEM: '+item));
    }

    checkUpdate = () => {
        getDecks().then((res) => {
            res !== this.state.deckList
                ? this.setState({ deckList: res })
                : null
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { deckList } = this.state;
        // console.log(this.state);
        this.checkUpdate()
        // logAllData()
        return (
            <View style={styles.container}>
                {deckList === undefined
                    ? <Text>You don't have any decks yet.</Text>
                    : <FlatList
                        data={deckList}
                        renderItem={({ item }) => {
                            item = JSON.parse(item[1])
                            // console.log('ITEMMMMM :'+JSON.parse(item[1]).title);
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => navigate('DeckView', item)} key={item.title}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.cards.push()} cards</Text>
                                </TouchableOpacity>
                            )
                        }
                        }
                    />
                }
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
        paddingTop: 50
    },
    card: {
        width: 280,
        height: 150,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: .5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: 20,
        textTransform: 'uppercase'
    }
});