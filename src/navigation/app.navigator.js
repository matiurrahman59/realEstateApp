import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import FavouriteScreen from '../features/favourites/screen/favourite.screen';
import ProfileScreen from '../features/profile/screen/profile.screen';
import RealEstateScreen from '../features/realestate/screen/realestate.screen';
import SearchScreen from '../features/search/screen/search.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favourites: 'heart-outline',
  Profile: 'person-outline',
};

const tabBarOptions = {
  // tabBarLabelPosition: 'beside-icon',
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarHideOnKeyboard: 'true',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,

    ...tabBarOptions,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name='Home' component={RealEstateScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Favourites' component={FavouriteScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
