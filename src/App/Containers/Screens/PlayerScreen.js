import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

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

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isLoading: state.ui.isLoading
    };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
    // Action
    return {
        // startLoading
        ui_StartLoading: ( payload = {} ) => dispatch(startLoading( payload )),
        // stopLoading
        ui_StopLoading: ( payload = {} ) => dispatch(stopLoading( payload ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);