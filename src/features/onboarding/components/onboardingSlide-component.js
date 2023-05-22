import React from 'react';
import { Image, Text, View } from 'react-native';
import { DEVICE } from '../../../constants';

const OnboardingSlide = ({ item }) => {
  return (
    <View
      style={{
        width: DEVICE.width,
        justifyContent: 'center',
      }}
      className={`justify-center`}
    >
      <View className='mt-[30px] px-6'>
        <Text className='text-2xl leading-10'>{item.title}</Text>
        <Text className='mt-5 text-sm w-3/4'>{item.subText}</Text>
      </View>
      <View className='flex-1 mt-9 rounded-[40px] px-[10px] mb-[10px]'>
        <Image
          source={{
            uri: item.imageUri,
          }}
          resizeMode='contain'
          className='h-full w-full rounded-[40px]'
        />
      </View>
    </View>
  );
};

export default OnboardingSlide;
