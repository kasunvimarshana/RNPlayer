import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/App/Navigators/AppNavigator';
import configureStore from './src/App/Store/Store/Store';
import { Provider } from 'react-redux';

function testStore( payload ) {
  return {
    type: 'ACTION_TYPE_TEST_STORE',
    payload: payload
  }
}

export default function App() {
  const store = configureStore();
  const storeStatus = store.getState();
  //console.log( storeStatus );
  const { defaultVideo } = storeStatus.video;
  //store.dispatch(testStore('Test Store'))

  return (
    <Provider store={store}>
        <PaperProvider>
            <AppNavigator defaultVideo={ defaultVideo }/>
        </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//console.disableYellowBox = true;