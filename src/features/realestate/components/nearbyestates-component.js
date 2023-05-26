import React from 'react';
import { View } from 'react-native';

import CardInfo from '../../../components/cardinfo-component';

const NearbyEstates = ({ featuredList }) => {
  return (
    <View className='flex-row justify-between flex-wrap pr-6'>
      {featuredList?.map((item) => (
        <CardInfo item={item} key={item.id} />
      ))}
    </View>
  );
};

export default NearbyEstates;
