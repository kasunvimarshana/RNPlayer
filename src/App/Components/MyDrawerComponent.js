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

const logoImage = require('../Assets/logo-removebg.png');

export default function MyDrawerComponent( props ){
    const {state, ...rest} = props;
    const newState = {...state};
    newState.routes = newState.routes.filter(( item ) => 
        item.name !== 'PlayerScreen'
    );

    return (
        <Container>
            <Content>
                <Card>
                    <CardItem >
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
}