
import React, { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'

import { ShoutStreamer } from './utility'
import { AppContainer } from './components'
import store from './store'

export default class App extends Component {
  
  componentDidMount = async () => {
    try {
      ShoutStreamer.setupNotificaitons()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}