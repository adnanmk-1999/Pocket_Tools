import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Calculator from '../screens/calculator';
import UnitConverter from '../screens/unitConverter';
import Timer from '../screens/timer';
import BMICalculator from '../screens/bmi';
import DiscountCalculator from '../screens/discount';
import CurrencyConverter from '../screens/currency';
import TimezoneClock from '../screens/timezone';
import InvestmentReturnSimulator from '../screens/investment';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0, // Android
            shadowOpacity: 0, // iOS
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Pocket Tools', headerTitle: '' }}
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
        <Stack.Screen
          name="BMI"
          component={BMICalculator}
          options={{ title: 'BMI Calculator' }}
        />
        <Stack.Screen
          name="Discount"
          component={DiscountCalculator}
          options={{ title: 'Discount Calculator' }}
        />
        <Stack.Screen
          name="Currency"
          component={CurrencyConverter}
          options={{ title: 'Currency Converter' }}
        />
        <Stack.Screen
          name="Timezone"
          component={TimezoneClock}
          options={{ title: 'World Time' }}
        />
        <Stack.Screen
          name="Investment"
          component={InvestmentReturnSimulator}
          options={{ title: 'Investment Simulator' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
