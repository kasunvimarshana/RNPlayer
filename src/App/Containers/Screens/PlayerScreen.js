import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { connect } from 'react-redux';
import {Container, Header, Content, Footer, Title} from 'native-base';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

class PlayerScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {};
        this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });
    }

    //componentWillReceiveProps( newProps ){}

    //componentDidMount() {}

    //componentWillUnmount() {}

    //shouldComponentUpdate( next, prev ){ return true; }

    //componentWillMount() {}

    //componentWillUpdate() {}

    //componentDidCatch(error, info) {}

    render() {
        //const { videoURI } = this.props.route.params;
        const { uri } = this.props.selectedVideo;

        return (
            <SafeAreaView style={styles.container}>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: { uri },
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
        marginTop: StatusBar.currentHeight || 0,
    }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isLoading: state.ui.isLoading,
        selectedVideo: state.video.selectedVideo
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