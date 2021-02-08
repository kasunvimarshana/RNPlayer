import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator, useIsDrawerOpen  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import PlayerScreen from '../Containers/Screens/PlayerScreen';
import HomeScreen from '../Containers/Screens/HomeScreen';
import VideoListScreen from '../Containers/Screens/VideoListScreen';
import AddVideoScreen from '../Containers/Screens/AddVideoScreen';
import VideoScreen from '../Containers/Screens/VideoScreen';
import MyDrawerComponent from '../Components/MyDrawerComponent';

const Drawer = createDrawerNavigator();

function AppNavigator() {

    //const isDrawerOpen = useIsDrawerOpen();
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="PlayerScreen"
                screenOptions={{}}
                //backBehavior={{}}
                openByDefault={false}
                drawerPosition='left'
                drawerType={isLargeScreen ? 'permanent' : 'back'}
                drawerStyle={isLargeScreen ? null : { width: '100%' }}
                overlayColor='transparent'
                initialRouteParams={{}}
                navigationOptions={{}}
                drawerContent={props => <MyDrawerComponent {...props} />}
            >
                <Drawer.Screen 
                    name="PlayerScreen" 
                    component={PlayerScreen} 
                    options={{ 
                        drawerLabel: 'Player',
                        drawerIcon: ({ focused, color, size }) => (
                            <Ionicons name="play-circle-outline" size={size} color={color} />
                        )
                     }}
                    initialParams={{}}
                />
                <Drawer.Screen 
                    name="VideoListScreen" 
                    component={VideoListScreen} 
                    options={{ 
                        drawerLabel: 'Video List', 
                        drawerIcon: ({ focused, color, size }) => (
                            <Ionicons name="list-circle-outline" size={size} color={color} />
                        )
                    }}
                    initialParams={{}}
                />
                <Drawer.Screen 
                    name="AddVideoScreen" 
                    component={AddVideoScreen} 
                    options={{ 
                        drawerLabel: 'Add to List',
                        drawerIcon: ({ focused, color, size }) => (
                            <Ionicons name="add-circle-outline" size={size} color={color} />
                        ) 
                    }}
                    initialParams={{}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;