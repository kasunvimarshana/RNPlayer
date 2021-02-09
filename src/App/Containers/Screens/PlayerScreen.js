import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    StatusBar 
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Colors,
    Text,
    Card, 
    Title, 
    Paragraph,
    Headline,
    TextInput,
    List,
    Button,
    ActivityIndicator
} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

const logoImage = require('../../Assets/logo-removebg.png');

class PlayerScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {};
        /*this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });*/
    }

    render() {
        //const { videoURI } = this.props.route.params;
        const { uri } = this.props.selectedVideo;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    <View style={styles.contentContainer}>
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
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: Colors.red300
    },
    scrollView: {
        //marginHorizontal: 20,
    },
    contentContainer: {
        //flex: 1,
        //flexDirection: "column",
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
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
        ui_StartLoading: () => dispatch(startLoading()),
        // stopLoading
        ui_StopLoading: () => dispatch(stopLoading())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);