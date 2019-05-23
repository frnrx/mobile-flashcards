import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = "FlashCards";

const initialDeckList = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
}

function formatDeck(title) {
    let formattedDeck = {title:title,cards:[]}
    return formattedDeck
}

export function saveDeckTitle(title) {
    let deck = formatDeck(title)
    console.log('SAVE DECK: '+JSON.stringify(deck));
    
    storeData(deck)
}

export function getDecks() {
    const decks = getAllData()
    return decks
}

export function getDeck(title) {
    const deck = getData(title)
    return deck
}

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log('CLEAR DATA ERRO: '+e);
    }
}

// getDecks: return all of the decks along with their titles, questions, and answers. 
// getDeck: take in a single id argument and return the deck associated with that id. 
// saveDeckTitle: take in a single title argument and add it to the decks. 
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 


const storeData = async (deck) => {    
    console.log(deck.title);
    
    try {
        await AsyncStorage.setItem(deck.title, JSON.stringify(deck))
    } catch (e) {
        console.log('STORE DATA ERRO: '+e);
    }
    getAllData()
}

const getAllData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        return items
    } catch (error) {
        console.log('GET ALL DATA ERRO: '+error)
    }
}

// const getAllData = () => {
//     AsyncStorage.getAllKeys()
//             .then((keys) => {
//                 let items = AsyncStorage.multiGet(keys)
//                 console.log('KEYS: '+keys); 
//                 return items
//             })
// }


const getData = async (title) => {
    try {
        const item = await AsyncStorage.getItem(title)
        return item
    } catch (error) {
        console.log('GET ITEM ERRO: '+error)
    }
}


export const logAllData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        console.log('CONSOLE LOG ALL DATA: '+items)
    } catch (error) {
        console.log('CONSOLE LOG ALL DATA ERRO: '+error)
    }
}

