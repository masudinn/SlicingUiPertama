import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/Home';
import Splash from '../page/Splash';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
