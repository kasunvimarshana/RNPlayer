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

class VideoScreen extends Component {

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

        console.log("default_route_params", this.props.route.params);

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
                                        <Text> Video URI </Text>
                                        <Text></Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text> Title </Text>
                                        <Text></Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text> Description </Text>
                                        <Text></Text>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Button 
                                            icon="trash-can-outline" 
                                            mode="contained" 
                                            onPress={() => console.log('Pressed')}
                                        >
                                            Delete
                                        </Button>
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Button 
                                            icon="play-circle-outline" 
                                            mode="contained" 
                                            onPress={() => console.log('Pressed')}
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
        ui_StartLoading: () => dispatch(startLoading()),
        // stopLoading
        ui_StopLoading: () => dispatch(stopLoading())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);