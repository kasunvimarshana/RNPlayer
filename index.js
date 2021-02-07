/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {LogBox} from 'react-native';

import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/App/Store/Store/Store';

LogBox.ignoreLogs([
  'Require cycle:',
  'Remote debugger',
  'Accessing view manager configs',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillMount',
]);
// import "./debugmodules";
AppRegistry.registerComponent(appName, () => App);

/*
const store = configureStore();

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
*/