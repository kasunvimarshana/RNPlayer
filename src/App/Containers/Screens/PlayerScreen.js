import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    BackHandler,
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
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { WebView } from 'react-native-webview';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

const logoImage = require('../../Assets/logo-removebg.png');

class PlayerScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {
          canGoBack: false,
          focusSubscription: null
        };
        /*this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });*/

        this.webViewRef = React.createRef();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        focusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.forceUpdate();//Native react function to force rerendering
            }
        );
        this.state.focusSubscription = focusSubscription;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        //this.props.navigation will come in every component which is in navigator
        focusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.forceUpdate();//Native react function to force rerendering
            }
        );
        this.setState({focusSubscription: focusSubscription});
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

        //this.state.focusSubscription.remove();
    }

    UNSAFE_componentWillMount() {
        //
    }

    handleBackButton = () =>{
        /*if(this.webViewRef){
            //this.webViewRef.current.goBack();
            this.webViewRef.goBack();
        }
        return true;*/
        //console.log("webViewRef", this.webViewRef);
        if (this.state.canGoBack) {
          //this.webViewRef.goBack();
          const selectedVideo = this.getSelectedVideo();
          this.props.navigation.navigate("VideoScreen", {video: selectedVideo});
          return true;
        }
    }

    getSelectedVideo = () => {
        //const { videoURI } = this.props.route.params;
        const { defaultVideo, video } = this.props.route.params;
        //const selectedVideo = ( video && Object.keys(video).length > 0 && video.constructor !== Object ) ? video : defaultVideo;
        const selectedVideo = ( video && Object.keys(video).length > 0 ) ? video : defaultVideo;
        return selectedVideo;
    }

    onNavigationStateChange(navState) {
        console.log('navState.canGoBack', navState.canGoBack);
        /*this.setState({
          canGoBack: navState.canGoBack,
        });*/
        this.setState({
            canGoBack: true
        });
    }

    render() {
        const selectedVideo = this.getSelectedVideo();
        const { uri } = selectedVideo;
        const runFirst = `
            window.isNativeApp = true;
            true; // note: this is required, or you'll sometimes get silent failures
        `;
        //onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                      <WebView
                        ref={(ref) => this.webViewRef = ref}
                        style={styles.webView}
                        source={{
                          uri: uri
                        }}
                        scalesPageToFit={ true }
                        startInLoadingState={ true }
                        javaScriptEnabled={true}
                        allowsFullscreenVideo={true}
                        useWebKit={false}
                        mediaPlaybackRequiresUserAction={true}
                        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                        allowsBackForwardNavigationGestures={true}
                      />
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}

/*
<VideoPlayer
                            videoProps={{
                                shouldPlay: true,
                                resizeMode: Video.RESIZE_MODE_CONTAIN,
                                source: {
                                    uri: 'https://m.youtube.com/watch?v=IHYv5WHQ9Qc'
                                }
                            }}
                            inFullscreen={true}
                            showControlsOnLoad={true}
                            showFullscreenButton={false}
                            videoBackground='transparent'
                        />
*/

/*
<Video
                            ref={(ref) => this.videoRef = ref}
                            style={styles.video}
                            source={{
                                uri: uri
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping={true}
                            shouldPlay={true}
                            onPlaybackStatusUpdate={(status) => this.handleVideoOnPlaybackStatusUpdate(status)}
                        />

*/

/*
<WebView
                            style={styles.webView}
                            originWhitelist={['*']}
                            sharedCookiesEnabled={true}
                            injectedJavaScriptBeforeContentLoaded={runFirst}
                            source={{
                                uri: uri
                            }}
                            onMessage={(event) => {}}
                            injectedJavaScript={runFirst}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
*/

/*
<Video
                            source={{ uri: uri }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay={false}
                            isLooping={false}
                            useNativeControls
                            style={styles.video}
                        />
*/

/*
<WebView
                            ref={(ref) => this.webViewRef = ref}
                            style={styles.webView}
                            originWhitelist={['*']}
                            sharedCookiesEnabled={true}
                            injectedJavaScriptBeforeContentLoaded={runFirst}
                            source={{
                                uri: uri
                            }}
                            onMessage={(event) => {}}
                            injectedJavaScript={runFirst}
                            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            allowsBackForwardNavigationGestures
                        />
*/

/*
<WebView
                        ref={(ref) => this.webViewRef = ref}
                        style={styles.webView}
                        originWhitelist={['*']}
                        sharedCookiesEnabled={false}
                        injectedJavaScriptBeforeContentLoaded={runFirst}
                        source={{
                          uri: uri
                        }}
                        onMessage={(event) => {}}
                        injectedJavaScript={runFirst}
                        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                        startInLoadingState
                        renderLoading={() => (
                          <View style={{ flex: 1, alignItems: 'center' }}>
                            <ActivityIndicator size="large" />
                          </View>
                        )}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsBackForwardNavigationGestures
                      />
*/

/*
<WebView
        source = {{ html:
          "<h1>VIDEO TEST</h1>"+
          "<video width='100%' height='80%' class='video' controls='' preload='none'>"+
            "<source src='http://example.org/video.mp4' type='video/mp4'>"+
          "</video>"
        }}
        startInLoadingState = {true}
        allowsInlineMediaPlayback = {true}
      />
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: Colors.teal400
    },
    scrollView: {
        //marginHorizontal: 20,
        flex: 1
    },
    contentContainer: {
        //flex: 1,
        //flexDirection: "column",
        flex: 1
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    video: {
        flex: 1,
        alignSelf: 'stretch'
    },
    webView: {
        flex: 1,
        alignSelf: 'stretch'
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
        ui_StartLoading: () => dispatch(startLoading()),
        // stopLoading
        ui_StopLoading: () => dispatch(stopLoading())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);