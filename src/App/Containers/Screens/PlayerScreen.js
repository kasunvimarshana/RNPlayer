import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

class PlayerScreen extends Component {

    constructor() {
        super();
    }

    render() {
        const { videoURI } = this.props.route.params;

        return (
            <SafeAreaView style={styles.container}>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: { videoURI },
                        }
                    }}
                    inFullscreen={true}
                    showControlsOnLoad={true}
                    showFullscreenButton={false}
                    videoBackground='transparent'
                />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
});

export default PlayerScreen;