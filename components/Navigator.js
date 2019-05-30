import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'

const TabNavigator = createBottomTabNavigator({
    'Deck List': DeckList,
    'Add Deck': AddDeck,
});

const MainNavigator = createStackNavigator({
    Home: TabNavigator,
    DeckView: {
        screen: DeckView,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
          }),
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: "Add Card"
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: "Quiz"
        }
    },
});
export default createAppContainer(MainNavigator);