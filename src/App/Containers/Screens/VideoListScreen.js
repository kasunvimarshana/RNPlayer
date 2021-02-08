import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    FlatList,
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
import ListItem from '../../Components/ListItem';

const logoImage = require('../../Assets/logo-removebg.png');

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

class VideoListScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {
            selectedListItemId: 0
        };
        /*this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });*/
        this.inputDelete = React.createRef();
        this.inputPlay = React.createRef();
    }

    listItemOnSelect = ( value ) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                selectedListItemId: value
            }
        });
    }

    renderListItem = ({ item }) => {
        const backgroundColor = item.id === this.state.selectedListItemId 
            ? Colors.red400 : 'transparent';

        return (
            <ListItem
                item={item}
                onPress={() => this.listItemOnSelect(item.id)}
                style={{ backgroundColor }}
            />
        );
    };
    

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Headline style={styles.heding}> Info </Headline>
                        </View>
                        <View style={styles.form}>
                            <View style={styles.card}>
                                <View style={styles.cardContent}>
                                    <FlatList
                                        data={DATA}
                                        renderItem={this.renderListItem}
                                        keyExtractor={(item) => item.id}
                                        extraData={this.state.selectedListItemId}
                                    />
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
    cardCover: {
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoListScreen);