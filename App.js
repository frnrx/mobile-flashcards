import React from 'react';
import Navigator from './components/Navigator'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Navigator />
    );
  }
}