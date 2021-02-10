import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    Alert,
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

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';
import { deleteVideo } from '../../Store/Actions/VideoAction';
const logoImage = require('../../Assets/logo-removebg.png');

class VideoScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {
            focusSubscription: null
        };
        /*this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });*/

        focusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.forceUpdate();//Native react function to force rerendering
            }
        );
        this.state.focusSubscription = focusSubscription;
    }

    componentDidMount() {
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
        //this.state.focusSubscription.remove();
    }

    //UNSAFE_componentWillReceiveProps(nextProps) {}

    onDeletePressHandler = ( video ) => {
        if( video.editable ){
            Alert.alert(
                'Alert',
                'Please Confirm',
                [
                    {
                        text: 'Ok', 
                        onPress: () => {
                            this.props.ui_DeleteVideo( video ).then(
                                this.props.navigation.navigate('VideoListScreen', {})
                            );
                        }
                    },
                    {
                        text: 'Cancel', 
                        onPress: () => console.log('Cancel'), 
                        style: 'cancel'
                    },
                ],
                { cancelable: false }
            );
        }else{
            Alert.alert(
                'Alert',
                'This Video Cant Delete',
                [
                    {
                        text: 'Ok', 
                        onPress: () => console.log('Cancel'), 
                        style: 'cancel'
                    },
                ],
                { cancelable: false }
            );
        }
        //this.props.navigation.navigate('VideoScreen', {video: value});
    }

    onPlayPressHandler = ( value ) => {
        this.props.navigation.navigate('PlayerScreen', {video: value});
    }

    generateDeleteActivityContent = ( selectedVideo ) => {
        let content = null;
        if ( this.props.isLoading ) {
            content = (<ActivityIndicator 
                animating={true} 
                color={Colors.red800} 
            />);
        }else{
            content = (<Button 
                icon="trash-can-outline" 
                mode="contained" 
                onPress={() => this.onDeletePressHandler( selectedVideo )}
            >
                Delete
            </Button>);
        }
        return content;
    }

    getSelectedVideo = () => {
        //const { videoURI } = this.props.route.params;
        const { defaultVideo, video } = this.props.route.params;
        //const selectedVideo = ( video && Object.keys(video).length > 0 && video.constructor !== Object ) ? video : defaultVideo;
        const selectedVideo = ( video && Object.keys(video).length > 0 ) ? video : defaultVideo;
        return selectedVideo;
    }

    render() {
        const selectedVideo = this.getSelectedVideo();
        const deleteActivityContent = this.generateDeleteActivityContent( selectedVideo );
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Headline style={styles.heding}> Info </Headline>
                        </View>
                        <View style={styles.form}>
                            <View style={styles.card}>
                                <Image style={styles.coverImage} source={logoImage} />
                                <View style={styles.cardContent}>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}> Video URI </Text>
                                        <Text style={styles.inputValue}>{selectedVideo.uri}</Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}> Title </Text>
                                        <Text style={styles.inputValue}>{selectedVideo.title}</Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}> Description </Text>
                                        <Text style={styles.inputValue}>{selectedVideo.description}</Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        { deleteActivityContent }
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Button 
                                            icon="play-circle-outline" 
                                            mode="contained" 
                                            onPress={() => this.onPlayPressHandler(selectedVideo)}
                                        >
                                            Play
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}

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
    },
    contentContainer: {
        flex: 1,
        flexDirection: "column",
    },
    form: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    inputGroup: {
        width: '100%',
        paddingBottom: 5
    },
    inputLabel: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 23
    },
    inputValue: {
        color: Colors.white,
        fontSize: 18
    },
    card: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    cardContent: {
        flex: 1
    },
    coverImage: {
        backgroundColor: 'transparent',
        backfaceVisibility: 'hidden',
        resizeMode: 'stretch',
        width: '100%',
        height: 200
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    headingContainer: {
        width: '100%',
        alignItems: 'center'
    },
    heding: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 30
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
        ui_StartLoading: () => dispatch(startLoading()),
        // stopLoading
        ui_StopLoading: () => dispatch(stopLoading()),
        // deleteVideo
        ui_DeleteVideo: (video) => dispatch(deleteVideo(video))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);