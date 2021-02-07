import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class VideoListScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>VideoListScreen</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoListScreen;