import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import TouchableButton from '../../../components/button-component';
import DefaultText from '../../../components/defaulttext-componet';
import SocialIcon from '../../../components/socialicon-component';
import { DEVICE, logInImages, socialIcons } from '../../../constants/index';

const AuthHomeScreen = ({ navigation }) => {
  return (
    <View className='flex-1 bg-white'>
      {/* Image container */}
      <View className='flex-row flex-wrap gap-2 justify-center'>
        <Image
          source={logInImages.image1}
          style={{ width: (DEVICE.width / 2) * 0.9 }}
          className='h-[174px] rounded-[20px]'
        />
        <Image
          source={logInImages.image2}
          style={{ width: (DEVICE.width / 2) * 0.9 }}
          className={`h-[174px] rounded-[20px] w-1/2`}
        />
        <Image
          source={logInImages.image3}
          style={{ width: (DEVICE.width / 2) * 0.9 }}
          className='h-[174px] rounded-[20px]'
        />
        <Image
          source={logInImages.image4}
          style={{ width: (DEVICE.width / 2) * 0.9 }}
          className='h-[174px] rounded-[20px]'
        />
      </View>

      <View className='pt-14 flex-row pl-6 gap-1'>
        <DefaultText className='font-lato font-medium text-2xl leading-10'>
          Ready to
        </DefaultText>
        <DefaultText className='font-lato font-extrabold text-2xl leading-10 text-secondary'>
          explore?
        </DefaultText>
      </View>

      {/* Button */}
      <View className='items-center pt-[50px]'>
        <TouchableButton
          label='Continue with Email'
          labelStyle='py-[22px] tracking-wide font-bold font-lato leading-[19px]'
          contentContainerStyle='w-[80vw]'
          appendComponent={
            <Avatar.Icon
              size={26}
              icon='email-outline'
              style={{ backgroundColor: 'transparent' }}
            />
          }
        />
      </View>

      {/* Divider line */}
      <View className='pt-[40px] px-6 flex-row items-center'>
        <View className='bg-gray--2 h-[1px] flex-grow' />
        <DefaultText className='p-3 text-gray--4 font-semibold'>OR</DefaultText>
        <View className='bg-gray--2 h-[1px] flex-grow' />
      </View>

      {/* Social media icon */}
      <View className='flex-row justify-between space-x-3 px-6 pt-5'>
        <TouchableOpacity className='bg-gray--3 flex-grow p-4 flex-row items-center justify-center rounded-3xl'>
          <Image
            source={socialIcons.google}
            className='h-[25px] w-[25px] rounded-full'
          />
        </TouchableOpacity>
        <TouchableOpacity className='bg-gray--3 p-4 flex-grow flex-row items-center justify-center rounded-3xl'>
          <Image
            source={socialIcons.fb}
            className='h-[25px] w-[25px] rounded-full'
          />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className='items-center'>
        <View className='pt-[35px] flex-row gap-1 items-baseline'>
          <DefaultText className='font-lato leading-5'>
            Don't have an account?
          </DefaultText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <DefaultText className='font-lato font-bold leading-5 '>
              Register
            </DefaultText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthHomeScreen;
