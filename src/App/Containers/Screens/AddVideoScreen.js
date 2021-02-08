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

const logoImage = require('../../Assets/logo-removebg.png');

class AddVideoScreen extends Component {

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
        this.inputVideoURI = React.createRef();
        this.inputTitle = React.createRef();
        this.inputDescription = React.createRef();
        this.inputSave = React.createRef();
    }

    videoURIOnChange = ( value ) => {}
    titleOnChange = ( value ) => {}
    descriptionOnChange = ( value ) => {}

    render() {
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
                                            placeholder="Video URL"
                                            ref={(ref) => this.inputVideoURI = ref}
                                            value = {this.state.videoURIValue}
                                            defaultValue={this.state.videoURIValue}
                                            onChangeText={this.videoURIOnChange}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Title"
                                            ref={(ref) => this.inputTitle = ref}
                                            value = {this.state.titleValue}
                                            defaultValue={this.state.titleValue}
                                            onChangeText={this.titleOnChange}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Description"
                                            ref={(ref) => this.inputDescription = ref}
                                            value = {this.state.descriptionValue}
                                            defaultValue={this.state.descriptionValue}
                                            onChangeText={this.descriptionOnChange}
                                        />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Button 
                                            ref={(ref) => this.inputSave = ref}
                                            icon="content-save-outline" 
                                            mode="contained" 
                                            onPress={() => console.log('Pressed')}
                                        >
                                            Save
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
        backgroundColor: Colors.red300
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
        color: Colors.white
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoScreen);