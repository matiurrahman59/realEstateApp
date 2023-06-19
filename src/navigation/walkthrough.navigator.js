import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '../features/authentication/screen/authhome.screen';
import LoginScreen from '../features/authentication/screen/login.screen';
import SignUpScreen from '../features/authentication/screen/signup.screen';
import WalkthroughScreen from '../features/onboarding/screen/walkthrough.screen';
import WelcomeScreen from '../features/onboarding/screen/welcome.screen';

const Stack = createStackNavigator();

const WalkthroughNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Welcome' component={WelcomeScreen} />
    <Stack.Screen name='Walkthrough' component={WalkthroughScreen} />
    <Stack.Screen name='AuthLogin' component={AuthHomeScreen} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Signup' component={SignUpScreen} />
  </Stack.Navigator>
);

export default WalkthroughNavigator;
