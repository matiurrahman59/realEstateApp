import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import DefaultText from '../../../components/defaulttext-componet';

const NearbyEstates = ({ featuredList }) => {
  return (
    <View className='pr-2'>
      <View className='flex-row justify-around flex-wrap gap-3'>
        {featuredList?.map((item) => (
          <TouchableOpacity
            key={item.id}
            className='p-2 rounded-3xl space-y-3 bg-gray--3'
          >
            <View className='relative'>
              <Image
                source={{ uri: item.imageUrl }}
                className='h-[180px] w-[144px] rounded-3xl opacity-95'
              />
              <View className='absolute bottom-2 right-3 bg-secondary py-2 px-3 rounded-lg'>
                <View className='flex-row items-end'>
                  <DefaultText className='text-xs text-white font-montserrat font-semibold leading-4 '>
                    $ {item.price}
                  </DefaultText>
                  <DefaultText className='text-[8px] text-white leading-[10px] font-medium'>
                    /month
                  </DefaultText>
                </View>
              </View>
              <TouchableOpacity className='absolute top-2 right-2'>
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

            <DefaultText className='text-xs  max-w-[130px] font-bold'>
              {item.name}
            </DefaultText>
            <View className='flex-row items-start space-x-2'>
              <View className='flex-row items-center space-x-1'>
                <Ionicons name='star' size={9} color='#FFC42D' />
                <DefaultText className='font-bold leading-[10px] text-[10px] text-[#53587A]'>
                  {item.rating}
                </DefaultText>
              </View>
              <View>
                <View className='flex-row items-start gap-1'>
                  <Ionicons name='location' size={9} color='#252B5C' />
                  <DefaultText className='font-bold max-w-[100px] leading-[10px] opacity-80 text-[10px]  text-[#53587A]'>
                    {item.address}
                  </DefaultText>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NearbyEstates;
