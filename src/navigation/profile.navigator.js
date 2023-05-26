import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CameraScreen from '../features/profile/screen/camera.screen';
import ProfileScreen from '../features/profile/screen/profile.screen';
import SettingScreen from '../features/profile/screen/setting.screen';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#252B5C',
        fontSize: 18,
      },
    }}
  >
    <Stack.Screen name='Profile' component={ProfileScreen} />
    <Stack.Screen
      name='Setting'
      options={{
        headerTitle: 'Edit favorite',
      }}
      component={SettingScreen}
    />
    <Stack.Screen name='Camera' component={CameraScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
