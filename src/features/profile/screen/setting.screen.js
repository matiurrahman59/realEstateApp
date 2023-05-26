import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import TouchableButton from '../../../components/button-component';
import DefaultText from '../../../components/defaulttext-componet';

const userIMage = require('../../../assets/images/user-2.png');
const googleIcon = require('../../../assets/images/Login/Google.png');
const facebookIcon = require('../../../assets/images/Login/Facebook.png');

const SettingScreen = ({ navigation, route }) => {
  const { name, mail, imageUrl, phone } = route.params;

  return (
    <View className='flex-1 bg-white px-6 relative'>
      <View className='absolute bottom-3 left-0 right-0 items-center'>
        <TouchableButton
          label='Choose location'
          contentContainerStyle='rounded-[20px] w-[80vw]'
          labelStyle='py-7 px-16 font-bold font-lato'
        />
      </View>

      {/* User Image */}
      <View className='py-5 items-center'>
        <Avatar.Image size={100} source={userIMage} />
      </View>

      {/* User details */}
      <View className='space-y-3'>
        {/* Name */}
        <View className=' flex-row justify-between items-center bg-gray--3 py-7 px-4 rounded-[20px]'>
          <DefaultText className='font-lato'>{name}</DefaultText>
          <Ionicons name='person-outline' size={20} color='#252B5C' />
        </View>

        {/* Phone */}
        <View className=' flex-row justify-between items-center bg-gray--3 py-7 px-4 rounded-[20px]'>
          <DefaultText className='font-lato'>{phone}</DefaultText>
          <Ionicons name='call-outline' size={20} color='#252B5C' />
        </View>

        {/* Email */}
        <View className=' flex-row justify-between items-center bg-gray--3 py-7 px-4 rounded-[20px]'>
          <DefaultText className='font-lato'>{mail}</DefaultText>
          <Ionicons name='mail-outline' size={20} color='#252B5C' />
        </View>

        {/* Social media link */}
        <View className='flex-row justify-between space-x-3'>
          <TouchableOpacity className='bg-secondary flex-grow p-4 flex-row items-center justify-center rounded-3xl space-x-3'>
            <Image
              source={googleIcon}
              className='h-[25px] w-[25px] rounded-full'
            />
            <DefaultText className='font-lato font-semibold text-sm text-white leading-[14px]'>
              UnLink
            </DefaultText>
          </TouchableOpacity>

          <TouchableOpacity className='bg-gray--3 p-4 flex-grow flex-row items-center justify-center rounded-3xl space-x-3'>
            <Image
              source={facebookIcon}
              className='h-[25px] w-[25px] rounded-full'
            />
            <DefaultText className='font-lato font-semibold text-sm leading-[14px]'>
              UnLink
            </DefaultText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
