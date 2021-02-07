import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class HomeScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>HomeScreen</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;