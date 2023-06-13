import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import FavouriteScreen from '../features/favourites/screen/favourite.screen';
import ProfileScreen from '../features/profile/screen/profile.screen';
import SettingScreen from '../features/profile/screen/setting.screen';
import EstateDetailsScreen from '../features/realestate/screen/details.screen';
import FeatureListScreen from '../features/realestate/screen/featurelist.screen';
import NotificationScreen from '../features/realestate/screen/notification.screen';
import RealEstateScreen from '../features/realestate/screen/realestate.screen';
import TopAgentScreen from '../features/realestate/screen/topagent.screen';
import TopLocationScreen from '../features/realestate/screen/toplocation.screen';
import SearchScreen from '../features/search/screen/search.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#234F68',
  tabBarInactiveTintColor: '#252B5C',
  tabBarHideOnKeyboard: 'true',
};

const createTabbedScreenOptions = ({ route }) => {
  return {
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: '#252B5C',
      fontSize: 18,
    },

    ...tabBarOptions,

    tabBarStyle: {
      borderTopWidth: 0,
      elevation: 0,
    },

    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Search') {
        iconName = focused ? 'search' : 'search-outline';
      } else if (route.name === 'Favourites') {
        iconName = focused ? 'heart' : 'heart-outline';
      } else if (route.name === 'User') {
        iconName = focused ? 'person' : 'person-outline';
      }

      return (
        <View className='items-center space-y-1'>
          <Ionicons name={iconName} size={size} color={color} />
          {focused && (
            <View className='h-[6px] w-[6px] bg-secondary rounded-full'></View>
          )}
        </View>
      );
    },
  };
};

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={createTabbedScreenOptions}>
      <Tab.Screen
        name='Home'
        component={RealEstateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerTitle: 'Search results',
        }}
      />
      <Tab.Screen
        name='Favourites'
        options={{
          headerTitle: 'My favorite',
        }}
        component={FavouriteScreen}
      />
      <Stack.Screen
        name='User'
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainScreen'
        options={{
          headerShown: false,
        }}
        component={HomeTabs}
      />
      <Stack.Screen
        name='Setting'
        options={{
          headerTitle: 'Edit favorite',
          headerTitleAlign: 'center',
        }}
        component={SettingScreen}
      />
      <Stack.Screen
        name='FeatureList'
        options={{
          headerTitle: '',
        }}
        component={FeatureListScreen}
      />
      <Stack.Screen
        name='TopLocation'
        options={{
          headerTitle: '',
        }}
        component={TopLocationScreen}
      />
      <Stack.Screen
        name='EstateDetails'
        options={{
          headerShown: false,
        }}
        component={EstateDetailsScreen}
      />
      <Stack.Screen
        name='Notification'
        options={{
          headerTitle: '',
        }}
        component={NotificationScreen}
      />
      <Stack.Screen
        name='TopAgent'
        options={{
          headerTitle: '',
        }}
        component={TopAgentScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
