import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import TouchableButton from '../../../components/button-component';
import { DEVICE } from '../../../constants';
import Location from '../components/location-component';

const userIMage = require('../../../assets/images/user-1.png');

const RealEstateScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: DEVICE.statusBar,
        backgroundColor: '#ffffff',
      }}
    >
      <View className='px-5'>
        {/* TOp Header */}
        <View className=' h-[50px]'>
          <View className='flex-row items-center justify-between'>
            <Location />
            <View className='flex-row space-x-2'>
              {/* Notification TouchableButton */}
              <View>
                <TouchableButton
                  onPress={() => console.log('--1--')}
                  appendComponent={
                    <Ionicons
                      name='notifications-outline'
                      size={20}
                      color='#252B5C'
                    />
                  }
                  contentContainerStyle='bg-white h-full w-[50px] rounded-full border-primary border-2'
                />
              </View>

              {/* Profile TouchableButton */}
              <View>
                <TouchableButton
                  onPress={() => console.log('--1--')}
                  appendComponent={<Image source={userIMage} />}
                  contentContainerStyle='bg-white h-full w-[50px] rounded-full border-gray--1 border-2'
                />
              </View>
            </View>
          </View>
        </View>

        {/* Header Text */}
        <View className='mt-[35px] mb-5'>
          <View className='flex-row items-center space-x-1'>
            <Text className='text-2xl leading-10 font-semibold text-dark--2'>
              Hey,
            </Text>
            <Text className='text-2xl leading-10 font-extrabold text-secondary'>
              Jonathan
            </Text>
          </View>
          <Text className='text-2xl leading-10 font-semibold text-dark--2'>
            Let's start exploring
          </Text>
        </View>

        {/* Search input */}
        <View className='px-4 py-6 bg-gray--3 rounded-xl flex-row items-center space-x-3'>
          <Ionicons name='search' size={20} color='#252B5C' />
          <TextInput
            placeholder='Search House, Apartment, etc'
            className='placeholder:text-gray--4 flex-grow'
          />
          <View className='border-l-2 border-gray--4 px-4'>
            <Ionicons name='mic-outline' size={20} color='#A1A5C1' />
          </View>
        </View>

        {/* Top locations */}
        <View className='mb-9 mt-[26px]'>
          {/* Header title */}
          <View className='flex-row justify-between items-center'>
            <Text className='font-bold text-[18px] text-dark--2 leading-[22px] tracking-wide'>
              Top Locations
            </Text>
            <Text className='font-semibold text-xs text-secondary  tracking-wide'>
              explore
            </Text>
          </View>

          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RealEstateScreen;
