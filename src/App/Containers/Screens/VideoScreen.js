import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class VideoScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>VideoScreen</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoScreen;