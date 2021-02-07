import * as React from 'react';
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
    Text,
    View
} from 'native-base';

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

const MyDrawerComponent = ( props ) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />

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