import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';
import { topLocations } from '../../../constants';

const FavouriteScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('vertical');

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const featuredEstateList = useMemo(
    () => topLocations.flatMap((item) => item.estates),
    [topLocations]
  );

  //  Setting header style
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity className='mr-4 bg-gray--3 h-[50px] w-[50px] items-center justify-center rounded-full'>
          <Avatar.Icon
            icon='trash-can-outline'
            size={50}
            color='#252B5C'
            className=' bg-gray--3'
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView className=' flex-1 bg-white pt-5'>
      <View className='px-6 flex-row justify-between items-center mb-5'>
        <DefaultText className='font-medium font-lato leading-[22px] text-lg'>
          {`${featuredEstateList.length} estates`}
        </DefaultText>
        <View className='flex-row items-center justify-between bg-gray--3 rounded-full p-2'>
          <TouchableOpacity
            onPress={() => handleTabPress('vertical')}
            className={`py-[6px]  px-3 ${
              selectedTab === 'vertical'
                ? 'bg-white rounded-full'
                : 'text-gray--4'
            }`}
          >
            <Ionicons
              name='grid'
              size={12}
              color={selectedTab === 'vertical' ? '#252B5C' : '#A1A5C1'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTabPress('horizontal')}
            className={`py-[6px]  px-3 ${
              selectedTab === 'horizontal'
                ? 'bg-white rounded-full'
                : 'text-gray--4'
            }`}
          >
            <Ionicons
              name='menu'
              size={16}
              color={selectedTab === 'horizontal' ? '#252B5C' : '#A1A5C1'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {selectedTab === 'vertical' ? (
        <View className='px-6 flex-row justify-between flex-wrap'>
          {featuredEstateList?.map((item) => (
            <CardInfo item={item} key={item.id} />
          ))}
        </View>
      ) : (
        <View className='px-6 pb-5 items-center'>
          {featuredEstateList?.map((item) => (
            <View key={item.id} className='mb-3'>
              <HorizontalCardInfo item={item} style='w-full' />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default FavouriteScreen;
