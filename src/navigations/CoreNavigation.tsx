import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../screens/Home/Homepage';
import TestPage from '../screens/testScreens/testScreen';
import UniversityScreen from '../screens/educationScreens/UniversityScreen';
import UniversityExamScreen from '../screens/educationScreens/UniversityExamScreen';
import KomvuxScreen from '../screens/educationScreens/KomvuxScreen';
import ResidentialCollageScreen from '../screens/educationScreens/ResidentialCollageScreen';
import VocationalScreen from '../screens/educationScreens/VocationalScreen';

export type AppStackParamList = {
    navigate(screenName: String): void;
    HomePage: undefined;
    UniversityScreen:undefined;
    UniversityExamScreen:undefined;
    KomvuxScreen:undefined;
    ResidentialCollageScreen:undefined;
    VocationalScreen:undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

function CoreNavigation(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={Homepage} options={{headerShown: false}}/>
        <Stack.Screen name='UniversityScreen' component={UniversityScreen} options={{headerShown: false}}/>
        <Stack.Screen name='UniversityExamScreen' component={UniversityExamScreen} options={{headerShown: false}}/>
        <Stack.Screen name='KomvuxScreen' component={KomvuxScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ResidentialCollageScreen' component={ResidentialCollageScreen} options={{headerShown: false}}/>
        <Stack.Screen name='VocationalScreen' component={VocationalScreen} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default CoreNavigation;
