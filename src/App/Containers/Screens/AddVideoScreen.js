import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class AddVideoScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>AddVideoScreen</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddVideoScreen;