import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

class VideoListScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>VideoListScreen</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        ui_StartLoading: ( payload = {} ) => dispatch(startLoading( payload )),
        // stopLoading
        ui_StopLoading: ( payload = {} ) => dispatch(stopLoading( payload ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListScreen);