export let deckList = [{
    id: 'sdfasdf',
    title: 'first deck',
    cards: [{
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    }]
},
{
    id: 'sdfadasdsagfdgsdf',
    title: '2 deck',
    cards: [{
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    }]
},
{
    id: 'sdfssadasdf',
    title: '3 deck',
    cards: [{
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    },
    {
        question: 'asdas',
        answer: 'asdas'    
    }]
}]

export const addCard = () => {

}

export const addDeck = (title) => {
    let formattedDeck = {
        id: idGen(),
        title: title,
        cards: []
    }

    deckList.push(formattedDeck)
}

const idGen = () => {
    return Math.random().toString(36).substr(2, 9);
}