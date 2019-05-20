import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import DeckView from './DeckView'

const TabNavigator = createBottomTabNavigator({
    'Deck List': DeckList,
    'Add Deck': AddDeck,
});

const MainNavigator = createStackNavigator({
    Home: TabNavigator,
    DeckView: {screen: DeckView},
});

export default createAppContainer(MainNavigator);