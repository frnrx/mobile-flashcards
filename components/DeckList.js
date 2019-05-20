import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { deckList } from '../utils/api.js'

export default class DeckList extends React.Component {

    // _onPress = () => {
    //     this.props.navigation.navigate('AddDeck')
    // }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <FlatList
                    data={deckList}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.card} onPress={() => navigate('DeckView')} key={item.id}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.cards.length} cards</Text>
                        </TouchableOpacity>
                    }
                />
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
