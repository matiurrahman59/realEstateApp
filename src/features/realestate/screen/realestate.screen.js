import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { NativeWindProvider } from 'native-wind';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { Avatar, Badge } from 'react-native-paper';

import TouchableButton from '../../../components/button-component';
import SectionHeader from '../../../components/seactionheader-component';
import {
  DEVICE,
  categoryList,
  topAgents,
  topLocations,
} from '../../../constants';
import CategoryList from '../components/categorylist-component';
import Location from '../components/location-component';
import TopAgents from '../components/topagents-component';
import TopLocations from '../components/toplocations-component';
const userIMage = require('../../../assets/images/user-1.png');

const RealEstateScreen = () => {
  const [text, setText] = useState('');
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <SafeAreaView
      style={{
        marginTop: DEVICE.statusBar,
      }}
      className='flex-1 bg-white'
    >
      <StatusBar backgroundColor='white' />

      {/* Top content */}
      <View className='px-5'>
        <View className='h-[50px]'>
          <View className='flex-row items-center justify-between'>
            <Location />
            <View className='flex-row space-x-2'>
              <View className='w-[50px] h-[50px] flex items-center justify-center rounded-full border-primary border-2 bg-white'>
                <View className='relative'>
                  <Ionicons
                    name='notifications-outline'
                    size={20}
                    color='#252B5C'
                  />
                  <View className='h-3 w-3 bg-white absolute -top-1 -right-1 flex justify-center items-center'>
                    <Badge size={6} />
                  </View>
                </View>
              </View>
              {/* <Avatar.Icon
                size={50}
                icon={() => (
                  <View className='relative'>
                    <Ionicons
                      name='notifications-outline'
                      size={20}
                      color='#252B5C'
                    />
                    <View className='h-3 w-3 bg-white absolute -top-1 -right-1 flex justify-center items-center'>
                      <Badge size={6} />
                    </View>
                  </View>
                )}
                style={{
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#8BC83F',
                }}
              /> */}

              <View className='w-[50px] border-gray--1 border-2 rounded-full flex items-center justify-center'>
                <Avatar.Image size={44} source={userIMage} />
              </View>
            </View>
          </View>
        </View>

        {/* Header Text */}
        <View className='mt-[35px] mb-5'>
          <View className='flex-row items-center space-x-1'>
            <Text className='text-2xl leading-10 font-font-medium text-dark--2'>
              Hey,
            </Text>
            <Text className='text-2xl leading-10 font-extrabold text-secondary'>
              Jonathan!
            </Text>
          </View>
          <Text className='text-2xl leading-10 font-medium text-dark--2'>
            Let's start exploring
          </Text>

          <Text
            onPress={() =>
              setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
            }
            className='text-primary dark:text-red-600'
          >
            {`The color scheme is ${colorScheme}`}
          </Text>
        </View>

        {/* Search input */}
        <View className='px-4 py-6 bg-gray--3 rounded-xl flex-row items-center space-x-3'>
          <Ionicons name='search' size={20} color='#252B5C' />
          <TextInput
            placeholder='Search House, Apartment, etc'
            className='placeholder:text-gray--4 flex-grow'
            value={text}
            onChangeText={(text) => setText(text)}
          />

          <View className='border-l-2 border-gray--4 px-4'>
            <Ionicons name='mic-outline' size={20} color='#A1A5C1' />
          </View>
        </View>
      </View>

      {/* Category list */}
      <CategoryList category={categoryList} />

      <View className='pl-6 mt-9'>
        {/* Top locations */}
        <View className='mb-9'>
          <SectionHeader leftTitle='Top Locations' rightTitle='explore' />
          <TopLocations topLocations={topLocations} />
        </View>

        {/* Top agents */}
        <View className='mb-9'>
          <SectionHeader leftTitle='Top Estate Agent' rightTitle='explore' />
          <TopAgents topAgents={topAgents} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RealEstateScreen;
