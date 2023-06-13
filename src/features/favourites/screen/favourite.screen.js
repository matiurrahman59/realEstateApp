import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';
import { topLocations } from '../../../constants';

const FavouriteScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('vertical');
  const [listData, setListData] = useState(function () {
    return topLocations.flatMap((item) => item.estates);
  });

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const deleteHandler = (item) => {
    const updatedList = listData.filter((dataItem) => dataItem.id !== item.id);
    setListData(updatedList);
  };

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

  const RightSwipe = ({ item }) => {
    return (
      <TouchableOpacity
        className='mb-[10px]'
        onPress={() => deleteHandler(item)}
      >
        <View
          style={{
            height: '100%',
          }}
          className='bg-secondary justify-center items-end rounded-3xl'
        >
          <Avatar.Icon
            icon='trash-can-outline'
            size={40}
            className='bg-transparent'
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderHiddenItem = ({ item }) => (
    <TouchableOpacity className='mb-[10px]' onPress={() => deleteHandler(item)}>
      <View
        style={{
          height: '100%',
        }}
        className='bg-secondary justify-center items-end rounded-3xl'
      >
        <Avatar.Icon
          icon='trash-can-outline'
          size={40}
          className='bg-transparent mr-4'
        />
      </View>
    </TouchableOpacity>
  );

  const renderListItem = ({ item }) => {
    return <HorizontalCardInfo item={item} style='mr-0 mb-[10px]' />;
  };

  return (
    <ScrollView className=' flex-1 bg-white pt-5'>
      <View className='px-6 flex-row justify-between items-center'>
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
        <View className='px-6 py-5 pb-10 flex-row justify-between flex-wrap'>
          {listData?.map((item) => (
            <CardInfo item={item} key={item.id} />
          ))}
        </View>
      ) : (
        <View className='pt-4 pb-12 space-y-3'>
          {listData?.map((item) => (
            <View key={item.id} className='mx-6'>
              <HorizontalCardInfo item={item} />
            </View>
          ))}
          {/* <Swipeable renderRightActions={RightSwipe}> */}
          {/* </Swipeable> */}

          {/* <View className='mx-6'>
            <SwipeListView
              data={listData}
              renderItem={renderListItem}
              renderHiddenItem={renderHiddenItem}
              rightOpenValue={-75}
              disableRightSwipe={true}
            />
          </View> */}
        </View>
      )}
    </ScrollView>
  );
};

export default FavouriteScreen;
