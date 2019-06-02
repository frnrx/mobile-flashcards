import { AsyncStorage } from 'react-native';

export function saveDeckTitle(title) {
    let deck = formatDeck(title)
    storeData(deck)
    return deck
}

export function addCardToDeck(deckTitle, question, answer, that) {
    const card = {
        "question": question,
        "answer": answer
    }
    let newDeck = {}
    getData(deckTitle)
        .then((deck) => {
            newDeck = { ...JSON.parse(deck) }
            newDeck.cards.push(card)
            storeData(newDeck)
            console.log('HEREEE');

            that.navigate('DeckView', newDeck)
        })
}

// FORMAT THE DECK

function formatDeck(title) {
    let formattedDeck = { title: title, cards: [] }
    return formattedDeck
}

// ASYNC FUNCTIONS

const storeData = async (deck) => {
    // console.log(deck.title);
    try {
        await AsyncStorage.setItem(deck.title, JSON.stringify(deck))
    } catch (e) {
        console.log('STORE DATA ERRO: ' + e);
    }
}

export const getAllData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        return items
    } catch (error) {
        console.log('GET ALL DATA ERRO: ' + error)
    }
}


const getData = async (title) => {
    try {
        const item = await AsyncStorage.getItem(title)
        return item
    } catch (error) {
        console.log('GET ITEM ERRO: ' + error)
    }
}