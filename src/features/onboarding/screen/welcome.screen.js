import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';

// internal import
import TouchableButton from '../../../components/button-component';
import { BrandLogo, welcomeImage } from '../../../constants';

const WelcomeScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Walkthrough');
  };

  return (
    <View className='flex-1 items-center justify-center relative'>
      <Image source={welcomeImage} className='absolute -z-10 w-full h-full' />
      <LinearGradient
        colors={['rgba(33, 98, 138, .3)', 'rgba(35, 79, 104, 1)']}
        className='absolute w-full h-full'
      />
      <View>
        <Image source={BrandLogo} className='w-[223px] h-[210px]' />
        <Text className='text-white text-4xl text-center -mt-9'>{`Rise \n Real Estate`}</Text>
      </View>
      <View className='absolute bottom-5 items-center'>
        <TouchableButton
          label='Lets start'
          contentContainerStyle='w-[190px] h-[54px]'
          onPress={onPress}
        />
        <View className='mt-6'>
          <Text className='opacity-80 text-[10px] tracking-wider leading-3 text-white text-center'>
            Made with love ♥
          </Text>
          <Text className='text-[10px] leading-3 text-white text-center'>
            v.1.0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
