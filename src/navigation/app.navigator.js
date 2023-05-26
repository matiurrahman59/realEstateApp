import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import FavouriteScreen from '../features/favourites/screen/favourite.screen';
import ProfileScreen from '../features/profile/screen/profile.screen';
import RealEstateScreen from '../features/realestate/screen/realestate.screen';
import SearchScreen from '../features/search/screen/search.screen';
import ProfileNavigator from './profile.navigator';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarActiveTintColor: '#234F68',
  tabBarInactiveTintColor: '#252B5C',
  tabBarHideOnKeyboard: 'true',
};

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
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

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name='Home' component={RealEstateScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen
        name='Favourites'
        options={{
          headerTitle: 'My favorite',
          headerShown: true,
        }}
        component={FavouriteScreen}
      />
      <Tab.Screen name='User' component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
