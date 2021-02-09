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

function AppNavigator( navigator_props ) {

    //const isDrawerOpen = useIsDrawerOpen();
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const { defaultVideo } = navigator_props;
    console.log('navigator_props', defaultVideo);
    //@react-navigation/drawer Drawer.Screen defaultrouteParam
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContentOptions={{
                    itemStyle: { marginVertical: 5 }
                }}
                initialRouteName='VideoListScreen'
                drawerPosition='left'
                drawerType={isLargeScreen ? 'permanent' : 'back'}
                drawerStyle={isLargeScreen ? null : { width: '100%' }}
                overlayColor='transparent'
                headerMode="none"
                //drawerContent={props => <MyDrawerComponent {...props} />}
                drawerContent={(props) => {
                        const filteredProps = {
                            ...props,
                            state: {
                                ...props.state,
                                routeNames: props.state.routeNames.filter(
                                    // To hide single option
                                    // (routeName) => routeName !== 'HiddenPage1',
                                    // To hide multiple options you can add & condition
                                    (routeName) => {
                                        routeName !== 'PlayerScreen'
                                        && routeName !== 'VideoScreen'
                                    }
                                ),
                                routes: props.state.routes.filter(
                                    (route) =>
                                    route.name !== 'PlayerScreen'
                                    && route.name !== 'VideoScreen'
                                ),
                            },
                        };
                        return (
                        <MyDrawerComponent {...filteredProps}></MyDrawerComponent>
                        );
                    }}
            >
                <Drawer.Screen 
                    name='VideoListScreen' 
                    component={VideoListScreen} 
                    options={{ 
                        drawerLabel: 'Video List'
                    }}
                />
                <Drawer.Screen 
                    name='AddVideoScreen' 
                    component={AddVideoScreen} 
                    options={{ 
                        drawerLabel: 'Add to List'
                    }}
                />
                <Drawer.Screen 
                    name='PlayerScreen' 
                    component={PlayerScreen} 
                    options={{ 
                        drawerLabel: null
                    }}
                    initialParams={{defaultVideo: defaultVideo}}
                />
                <Drawer.Screen 
                    name='VideoScreen' 
                    component={VideoScreen} 
                    options={{ 
                        drawerLabel: null
                    }}
                    initialParams={{defaultVideo: defaultVideo}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;