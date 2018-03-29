
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
import RootStack from './navigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <AppContainer /> */}
        <RootStack />
      </Provider>
    );
  }
}