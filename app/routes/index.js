import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Calculator from '../screens/calculator';
import UnitConverter from '../screens/unitConverter';
import Timer from '../screens/timer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Pocket Tools' }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
        />
        <Stack.Screen
          name="UnitConverter"
          component={UnitConverter}
          options={{ title: 'Unit Converter' }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ title: 'Timer & Stopwatch' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
