import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import DefaultText from '../../../components/defaulttext-componet';

const UserProfile = ({ user }) => {
  return (
    <View className='pt-5 items-center'>
      <View className=' relative'>
        <Avatar.Image size={100} source={user.imageUrl} />
        <Avatar.Icon
          size={32}
          icon='pencil-outline'
          className='absolute right-0 bottom-0 bg-secondary'
        />
      </View>
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
