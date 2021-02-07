import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PlayerScreen from '../Containers/Screens/PlayerScreen';
import HomeScreen from '../Containers/Screens/HomeScreen';
import VideoListScreen from '../Containers/Screens/VideoListScreen';
import AddVideoScreen from '../Containers/Screens/AddVideoScreen';
import VideoScreen from '../Containers/Screens/VideoScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="PlayerScreen" 
                    component={PlayerScreen} 
                    options={{}}
                    initialParams={{}}
                />
                <Stack.Screen 
                    name="VideoListScreen" 
                    component={VideoListScreen} 
                    options={{}}
                    initialParams={{}}
                />
                <Stack.Screen 
                    name="AddVideoScreen" 
                    component={AddVideoScreen} 
                    options={{}}
                    initialParams={{}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigator;