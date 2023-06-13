import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import SectionHeader from '../../../components/seactionheader-component';
import { activityDetails, topLocations, userData } from '../../../constants';
import CustomTab from '../components/customtab-component';
import UserProfile from '../components/userprofile-component';

const ProfileScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [featuredEstateList, setFeaturedEstateList] = useState(function () {
    return topLocations.flatMap((item) => item.estates);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting', userData)}
          className='mr-4 bg-gray--3 h-[50px] w-[50px] items-center justify-center rounded-full'
        >
          <Ionicons name='settings-outline' size={24} color='#252B5C' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <ScrollView className='flex-1 bg-white px-6'>
      {/* User profile */}
      <UserProfile user={userData} />

      {/* User activity details */}
      <View className='flex-row items-center justify-between pt-5'>
        {activityDetails?.map((item) => (
          <View
            key={item.id}
            className='border-[#ECEDF3] border-2 py-4 px-7 space-y-2 rounded-3xl items-center'
          >
            <DefaultText className='font-lato text-[14px] leading-4 font-bold'>
              {item.value}
            </DefaultText>
            <DefaultText className='font-lato text-xs font-medium'>
              {item.title}
            </DefaultText>
          </View>
        ))}
      </View>

      {/* Tab component */}
      <View className='pt-5 space-y-5 pb-6'>
        <CustomTab
          titles={['Transaction', 'Listings', 'Sold']}
          onSelectTab={handleTabSelect}
        />
        {selectedTab === 0 && (
          <View>
            <SectionHeader
              leftTitle={`${featuredEstateList?.length} transactions`}
              style='font-medium'
            />
            {/* <View className='flex-row justify-around flex-wrap'> */}
            <View className='flex-row justify-between flex-wrap'>
              {featuredEstateList?.map((item) => (
                <CardInfo item={item} key={item.id} />
              ))}
            </View>
          </View>
        )}
        {selectedTab === 1 && (
          <Text className='text-center opacity-50 pt-10'>
            No content found!
          </Text>
        )}
        {selectedTab === 2 && (
          <Text className='text-center opacity-50 pt-10'>
            No content found!
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
