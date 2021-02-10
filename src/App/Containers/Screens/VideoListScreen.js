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
import { getAllVideos } from '../../Store/Actions/VideoAction';
import ListItem from '../../Components/ListItem';

const logoImage = require('../../Assets/logo-removebg.png');

class VideoListScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {
            selectedListItemId: 0,
            focusSubscription: null
        };
        /*this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });*/
        this.inputDelete = React.createRef();
        this.inputPlay = React.createRef();

        this._didFocusUnsubscribe = props.navigation.addListener("didFocus", (payload) => {
            //console.log("didFocus");
        });

        this._focusUnsubscribe = props.navigation.addListener('focus', (payload) => {
            this.getAllVideos();
        });

        focusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.forceUpdate();//Native react function to force rerendering
            }
        );
        this.state.focusSubscription = focusSubscription;
    }

    componentDidMount() {
        this._didFocusUnsubscribe = this.props.navigation.addListener("didFocus", (payload) => {
            //console.log("didFocus");
        });

        this._focusUnsubscribe = this.props.navigation.addListener('focus', (payload) => {
            this.getAllVideos();
        });

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
    
    UNSAFE_componentWillMount() {
        //this._didFocusUnsubscribe.remove();
        //this._focusUnsubscribe.remove();
        this._didFocusUnsubscribe();
        this._focusUnsubscribe();
    }

    listItemOnSelect = ( value ) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                selectedListItem: value,
                selectedListItemId: value.id
            }
        });

        //this.props.navigation.navigate('VideoScreen', {defaultVideo: value});
        this.props.navigation.navigate('VideoScreen', {video: value});
    }

    //UNSAFE_componentWillMount() {}

    //UNSAFE_componentWillReceiveProps(nextProps) {}

    //componentDidUpdate(prevProps, prevState, snapshot) {}

    //shouldComponentUpdate() { return true; }

    getAllVideos = () => {
        return this.props.ui_GetAllVideos();
    }

    renderListItem = ({ item }) => {
        const backgroundColor = item.id === this.state.selectedListItemId 
            ? Colors.red400 : 'transparent';

        return (
            <ListItem
                item={item}
                onPress={() => this.listItemOnSelect( item )}
                style={{ backgroundColor }}
            />
        );
    };

    generateListItemContent = () => {
        let content = null;
        content = (<FlatList
            data={this.props.videoList}
            renderItem={this.renderListItem}
            keyExtractor={(item) => item.id}
            extraData={this.state.selectedListItemId}
        />);
        //if (content?.length) {}
        if (!Array.isArray(this.props.videoList) || !this.props.videoList.length) {
            /*content = (<ActivityIndicator 
                animating={true} 
                color={Colors.red800} 
            />);*/
        }else{
            content = (<FlatList
                data={this.props.videoList}
                renderItem={this.renderListItem}
                keyExtractor={(item) => item.id}
                extraData={this.state.selectedListItemId}
            />);
        }
        
        return content;
    }

    render() {
        const listItemContent = this.generateListItemContent();
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Headline style={styles.heding}> Info </Headline>
                        </View>
                        <View style={styles.form}>
                            <View style={styles.card}>
                                <View style={styles.cardContent}>
                                    {listItemContent}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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
        flex: 1
    },
    contentContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent: 'center',
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
        color: Colors.white,
        fontSize: 30
    }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isLoading: state.ui.isLoading,
        videoList: state.video.videoList
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
        // getAllVideos
        ui_GetAllVideos: () => dispatch(getAllVideos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListScreen);