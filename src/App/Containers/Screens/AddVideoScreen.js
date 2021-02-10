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

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';
import { createVideo } from '../../Store/Actions/VideoAction';

const logoImage = require('../../Assets/logo-removebg.png');

class AddVideoScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {
            uri: "",
            title: "",
            description: "",
            editable: true,
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

    videoURIOnChange = ( value ) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                uri: value
            }
        });
    }

    titleOnChange = ( value ) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: value
            }
        });
    }

    descriptionOnChange = ( value ) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                description: value
            }
        });
    }
    
    createVideo = () => {
        const video = {
            uri: this.state.uri,
            title: this.state.title,
            description: this.state.description,
            editable: this.state.editable || false
        }
        const expression_uri = new RegExp("^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$");

        if (!video.uri.toLowerCase().match(expression_uri)) {
            alert("Please Provide a Valid Video URL");
        }else if( (video.title == null) || (video.title == "") ){
            alert("Please Provide a Valid Title");
        }else{
            this.props.ui_CreateVideo( video );
        }
    }

    generateActivityContent = () => {
        let content = null;
        if ( this.props.isLoading ) {
            content = (<ActivityIndicator 
                animating={true} 
                color={Colors.red800} 
            />);
        }else{
            content = (<Button 
                icon="content-save-outline" 
                mode="contained" 
                onPress={this.createVideo}
                >
                    Save
            </Button>);
        }
        return content;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isLoading === false) {
            this.inputVideoURI.clear();
            this.inputTitle.clear();
            this.inputDescription.clear();
        }
    }

    render() {
        const activityContent = this.generateActivityContent();
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Headline style={styles.heding}> Add New Video </Headline>
                        </View>
                        <View style={styles.form}>
                            <View style={styles.card}>
                                <Image style={styles.coverImage} source={logoImage} />
                                <View style={styles.cardContent}>
                                    <View style={styles.inputGroup}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Video URL (http://exsample.com)"
                                            ref={(ref) => this.inputVideoURI = ref}
                                            value = {this.state.videoURIValue}
                                            defaultValue={this.state.videoURIValue}
                                            onChangeText={(text) => this.videoURIOnChange(text)}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Title"
                                            ref={(ref) => this.inputTitle = ref}
                                            value = {this.state.titleValue}
                                            defaultValue={this.state.titleValue}
                                            onChangeText={(text) => this.titleOnChange(text)}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Description"
                                            ref={(ref) => this.inputDescription = ref}
                                            value = {this.state.descriptionValue}
                                            defaultValue={this.state.descriptionValue}
                                            onChangeText={(text) => this.descriptionOnChange(text)}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        { activityContent }
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
        // createVideo
        ui_CreateVideo: ( payload = {} ) => dispatch(createVideo( payload )),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoScreen);