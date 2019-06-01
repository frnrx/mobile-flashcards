import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api.js'
import { NOTIFICATION_KEY } from '../utils/helpers.js'

export default class DeckList extends React.Component {

    state = {
        deckList: 'loading',
        loading: true,
        count: 0
    }

    loadDecks = () => {
        getDecks().then((res) => {
            let decksArray = []
            for (let i = 0; i < res.length; i++) {
                if (res[i][0] !== NOTIFICATION_KEY) {
                    decksArray.push(res[i][1])
                }
            }
            console.log(decksArray);
            decksArray !== this.state.deckList
                ? this.setState({ deckList: decksArray })
                : null
        })
    }

    componentWillMount() {
        this.loadDecks()
    }

    componentDidUpdate() {
        this.loadDecks()
    }

    render() {
        const { navigate } = this.props.navigation;
        const { deckList } = this.state;

        return (
            <View style={styles.container}>
                {deckList !== undefined
                    ? (deckList === 'loading'
                        ? <Text>Loading decks...</Text>
                        : <FlatList
                            data={deckList}
                            renderItem={({ item }) => {
                                item = JSON.parse(item)
                                // console.log(item);
                                return (
                                    <TouchableOpacity style={styles.card} onPress={() => navigate('DeckView', item)} key={item.title}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text >{item.cards.push()} cards</Text>
                                    </TouchableOpacity>
                                )
                            }
                            }
                        />)
                    : <Text>You don't have any decks yet. :(</Text>
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