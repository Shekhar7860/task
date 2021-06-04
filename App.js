/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import Navigator from './src/Navigator'
import { Provider } from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return(
  <Provider store={store}>
  <Navigator/>
  </Provider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
