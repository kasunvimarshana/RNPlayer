import * as React from 'react';
import { 
    StyleSheet, 
    StatusBar 
} from 'react-native';
import {
    Container, 
    Header, 
    Content, 
    Title,
    Text,
    View,
    Card,
    CardItem,
    Body,
    Image
} from 'native-base';
import {
    Drawer
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { startLoading, stopLoading } from '../Store/Actions/UIAction';
const logoImage = require('../Assets/logo-removebg.png');

const MyDrawerComponent = ( props ) => {
    const {state, ...rest} = props;
    const newState = {...state};
    newState.routes = newState.routes.filter(( item ) => 
        item.name !== 'PlayerScreen'
    );

    return (
        <Container>
            <Content>
                <Card>
                    <CardItem cardBody>
                        <Body>
                            <Image 
                                source={ logoImage } 
                                style={{height: 200, width: 200, flex: 1}}
                            />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <DrawerContentScrollView {...props}>
                                <DrawerItemList state={newState} {...rest} />

                                <Drawer.Section title="Player">
                                    <DrawerItem 
                                        icon={({color, size}) => (
                                            <Icon 
                                                name="home-outline" 
                                                color={color}
                                                size={size}
                                            />
                                        )}
                                        label="Player"
                                        onPress={() => {
                                            props.navigation.navigate('PlayerScreen')
                                        }}
                                    />
                                </Drawer.Section>
                            </DrawerContentScrollView>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container> 
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawerComponent);