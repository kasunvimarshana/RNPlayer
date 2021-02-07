import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      ref={(ref) => this._navigator = ref}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}