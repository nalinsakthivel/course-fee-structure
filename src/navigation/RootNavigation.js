import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Fees from '../screens/Fees';
import ApplicationFees from '../screens/ApplicationFees';
import ExamFees from '../screens/ExamFees';
import CourseFee from '../screens/CourseFee';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Fees" component={Fees} />
        <Stack.Screen name="ApplicationFee" component={ApplicationFees} />
        <Stack.Screen name="ExamFee" component={ExamFees} />
        <Stack.Screen name="CourseFee" component={CourseFee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
