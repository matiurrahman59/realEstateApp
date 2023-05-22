import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
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
  </Stack.Navigator>
);

export default WalkthroughNavigator;
