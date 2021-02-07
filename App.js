import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/App/Navigators/AppNavigator';
import configureStore from './src/App/Store/Store/Store';

export default function App() {
  const store = configureStore();
  return (
    <StoreProvider store={store}>
        <PaperProvider>
            <AppNavigator />
        </PaperProvider>
    </StoreProvider>
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

console.disableYellowBox = true;