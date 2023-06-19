import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';
import Icon from '../../../components/icon-component';
import ScrollViewWrapper from '../../../components/scrollview-component';
import { topLocations } from '../../../constants';

const FavouriteScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('vertical');
  const [listData, setListData] = useState(function () {
    return topLocations.flatMap((item) => item.estates);
  });

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  //  Setting header style
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          iconName='trash-outline'
          bgColor='#DFDFDF'
          color='#252B5C'
          boxSize={50}
          size={20}
          style='mr-5'
          onPress={() => console.log('favorite screen')}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollViewWrapper style='pt-5'>
      <View className=' flex-row justify-between items-center'>
        <DefaultText className='font-medium font-lato leading-[22px] text-lg'>
          {`${listData.length} estates`}
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
        <View className=' py-5 pb-10 flex-row justify-between flex-wrap'>
          {listData?.map((item) => (
            <CardInfo item={item} key={item.id} />
          ))}
        </View>
      ) : (
        <View className='pt-4 pb-12 space-y-3'>
          {listData?.map((item) => (
            <View key={item.id}>
              <HorizontalCardInfo item={item} />
            </View>
          ))}
        </View>
      )}
    </ScrollViewWrapper>
  );
};

export default FavouriteScreen;
