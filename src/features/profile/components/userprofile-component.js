import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import DefaultText from '../../../components/defaulttext-componet';

const UserProfile = ({ user }) => {
  return (
    <View className='pt-5 items-center'>
      <Avatar.Image size={100} source={user.imageUrl} />
      <View className='items-center pt-3 space-y-1'>
        <DefaultText className='text-[14px] font-bold leading-4 font-lato'>
          {user.name}
        </DefaultText>
        <DefaultText className='text-xs text-bodyText leading-3 font-semibold font-lato'>
          {user.mail}
        </DefaultText>
      </View>
    </View>
  );
};

export default UserProfile;
