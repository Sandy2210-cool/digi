import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screen/Login';
import Home from './src/Screen/Home';
import Dashboard from './src/Screen/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

