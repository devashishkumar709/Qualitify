import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUp from './Screen/Signup';
import Login from './Screen/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavi() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#4a4a4a',
        shadowColor: '#f2f2f2',
      }}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={SignUp} />
    </Drawer.Navigator>
  );
}

const myStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <myStack />
      </NavigationContainer>
    );
  };
  
  export default App;