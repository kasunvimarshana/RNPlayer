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
    List,
    ListItem,
    Left,
    Text,
    Right,
    Icon,
    Spinner
} from 'native-base';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

class VideoListScreen extends Component {

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
                    <Title> Videos </Title>
                </Header>

                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <List>
                                    <ListItem>
                                        <Left>
                                            <Text> Video 1 </Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text> Video 2 </Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Text> Video 3 </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text> Video 4 </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text> Video 5 </Text>
                                    </ListItem>
                                </List>
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
        isLoading: state.ui.isLoading,
        videoList: state.video.videoList
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