import { AsyncStorage } from 'react-native';

export function saveDeckTitle(title) {
    let deck = formatDeck(title)
    // console.log('SAVE DECK: ' + JSON.stringify(deck));
    storeData(deck)
    return deck
}

export function addCardToDeck(deckTitle, question, answer) {
    // console.log('SAVE CARD: ' + question + '     ' + answer);
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
        })
}

export function getDecks() {
    const decks = getAllData()
    return decks
    // getAllData().then((res) => {
    //     return res
    // })
}

export function getDeck(title) {
    const deck = getData(title)
    return deck
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

const getAllData = async () => {
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



// import { AsyncStorage } from 'react-native';
// import { NOTIFICATION_KEY } from './helpers.js'
// export const DECK_LIST_KEY = 'DECK_LIST'

// export function saveDeckTitle(title) {
//     let deck = formatDeck(title)
//     getData(DECK_LIST_KEY).then((res) => {
//         console.log('RESSS'+res);
        
//         res === undefined
//         ? storeData(deck)
//         : mergeData(deck)
//     })
//     // console.log('SAVE DECK: ' + JSON.stringify(deck));
//     return deck
// }

// export function addCardToDeck(deckTitle, question, answer) {
//     // console.log('SAVE CARD: ' + question + '     ' + answer);
//     const card = {
//         "question": question,
//         "answer": answer
//     }
//     let newDeck = {}
//     getData(deckTitle)
//         .then((deck) => {
//             newDeck = { ...JSON.parse(deck) }
//             newDeck.cards.push(card)
//             storeData(newDeck)
//         })
// }

// export function getDecks() {
//     return getData(DECK_LIST_KEY).then((res) => res)
//     // console.log('decks :'+JSON.stringify(decks)+' type of '+ typeof decks);
// }

// export function getDeck(title) {
//     getData(DECK_LIST_KEY)

//     // return deck
// }

// // FORMAT THE DECK

// function formatDeck(title) {
//     let formattedDeck = { title: title, cards: [] }
//     return formattedDeck
// }

// // ASYNC FUNCTIONS

// const storeData = async (deck) => {
//     // console.log(deck.title);
//     try {
//         await AsyncStorage.setItem(DECK_LIST_KEY, JSON.stringify(deck))
//     } catch (e) {
//         console.log('STORE DATA ERRO: ' + e);
//     }
// }

// const mergeData = async (deck) => {
//     // console.log(deck.title);
//     try {
//         await AsyncStorage.mergeItem(DECK_LIST_KEY, JSON.stringify(deck))
//     } catch (e) {
//         console.log('STORE DATA ERRO: ' + e);
//     }
// }

// const getData = async (key) => {
//     try {
//         const items = AsyncStorage.getItem(key).then((res) => res)
//         return items
//     } catch (error) {
//         console.log('GET ITEM ERRO: ' + error)
//     }
// }