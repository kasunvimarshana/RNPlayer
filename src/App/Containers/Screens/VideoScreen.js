import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {Container, Header, Content, Footer, Title} from 'native-base';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

class VideoScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {};
        this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });
    }

    render() {
        return(
            /*
            <SafeAreaView style={styles.container}>
                <Text>Title</Text>
            </SafeAreaView>
            */
            <Container>
                <Header>
                    <Title>Header</Title>
                </Header>

                <Content>
                    // Your main content goes here
                </Content>

                <Footer>
                    <Title>Footer</Title>
                </Footer>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);