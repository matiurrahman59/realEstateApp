import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Avatar } from 'react-native-paper';
import DefaultText from './defaulttext-componet';

const HorizontalCardInfo = ({ item, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EstateDetails', item)}
      className={`p-2 rounded-3xl h-[156px]  ${
        style ? style : 'mr-[10px]'
      } bg-gray--3 flex-row items-center space-x-3`}
    >
      <View className='relative'>
        <Image
          source={{ uri: item.imageUrl }}
          className='h-full w-[165px] rounded-3xl'
        />
        <View className='absolute bottom-2 left-3 bg-secondary py-2 px-3 rounded-lg'>
          <DefaultText className='text-white  font-medium text-xs'>
            {item.type}
          </DefaultText>
        </View>
        <TouchableOpacity className='absolute top-2 left-2'>
          <Avatar.Icon
            size={30}
            icon='heart-outline'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.78)',
            }}
            color='#FD5F4A'
          />
        </TouchableOpacity>
      </View>
      <View className='py-2 w-[147px] flex-grow'>
        <DefaultText className='text-sm  max-w-[130px] font-bold'>
          {item.name}
        </DefaultText>

        <View className='flex-row items-center gap-1 my-2'>
          <Ionicons name='star' size={12} color='#FFC42D' />
          <DefaultText className='font-bold text-xs text-[#53587A]'>
            {item.rating}
          </DefaultText>
        </View>

        <View className='flex-row items-start gap-1'>
          <Ionicons name='location' size={12} color='#252B5C' />
          <DefaultText className='text-xs max-w-[130px] leading-[13px] text-[#53587A] tracking-normal font-normal'>
            {item.address}
          </DefaultText>
        </View>

        <View className='mt-7 flex-row items-end'>
          <DefaultText className='text-lg font-montserrat font-bold leading-5 '>
            $ {item.price}
          </DefaultText>
          <DefaultText className='text-xs leading-[13px] font-medium'>
            /month
          </DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCardInfo;
