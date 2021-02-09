import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar 
} from 'react-native';

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
    Drawer,
    ActivityIndicator
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const logoImage = require('../Assets/logo-removebg.png');

export default function MyDrawerComponent( props ){
    /*const {state, ...rest} = props;
    const newState = {...state};
    newState.routes = newState.routes.filter(( item ) => 
        item.name !== 'PlayerScreen'
    );*/

    return (
        <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <Image style={styles.coverImage} source={logoImage} />
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                        </DrawerContentScrollView>

                        <Drawer.Section>
                            <DrawerItem 
                                label='Player'
                                onPress={() => {
                                    props.navigation.navigate('PlayerScreen')
                                }}
                            />
                        </Drawer.Section>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
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
});