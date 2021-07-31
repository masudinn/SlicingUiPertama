import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../page/Splash';
import Home from '../page/Home';
import Pesanan from '../page/Pesanan';
import Akun from '../page/Akun';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
