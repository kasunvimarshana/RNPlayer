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

class HomeScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {date: new Date()};
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
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <Title>Title</Title>
                        <Headline> Home </Headline>
                        <Paragraph> Description </Paragraph>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

/*React.useEffect(() => { console.log("component updated"); });*/