import React, { Component } from 'react';
import { 
    StyleSheet, 
    StatusBar 
} from 'react-native';
import { connect } from 'react-redux';
import {
    Container, 
    Header, 
    Content, 
    Title,
    Card,
    CardItem,
    Body,
    Separator,
    Text,
    ListItem,
    Button,
    Icon,
    Spinner
} from 'native-base';

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
                    <Title> Video </Title>
                </Header>

                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Separator bordered>
                                    <Text> Video URL </Text>
                                </Separator>
                                <ListItem>
                                    <Text>http://google.com</Text>
                                </ListItem>
                                <Separator bordered>
                                    <Text> Title </Text>
                                </Separator>
                                <ListItem>
                                    <Text>video title</Text>
                                </ListItem>
                                <Separator bordered>
                                    <Text> Description </Text>
                                </Separator>
                                <ListItem>
                                    <Text>video description</Text>
                                </ListItem>
                                <Separator bordered>
                                    <Text> Controls </Text>
                                </Separator>
                                <ListItem>
                                    <Button block rounded iconLeft>
                                        <Icon name='play' />
                                        <Text> Play </Text>
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button block rounded iconLeft>
                                        <Icon name='trash' />
                                        <Text> Delete </Text>
                                    </Button>
                                </ListItem>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
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