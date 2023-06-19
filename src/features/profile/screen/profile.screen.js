import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Avatar } from 'react-native-paper';
import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import Icon from '../../../components/icon-component';
import ScrollViewWrapper from '../../../components/scrollview-component';
import SectionHeader from '../../../components/seactionheader-component';
import UserProfile from '../../../components/userprofile-component';
import { activityDetails, topLocations, userData } from '../../../constants';
import CustomTab from '../components/customtab-component';

const ProfileScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [featuredEstateList, setFeaturedEstateList] = useState(function () {
    return topLocations.flatMap((item) => item.estates);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          iconName='settings-outline'
          bgColor='#DFDFDF'
          color='#252B5C'
          boxSize={50}
          size={20}
          style='mr-5'
          onPress={() => navigation.navigate('Setting', userData)}
        />
      ),
    });
  }, [navigation]);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <ScrollViewWrapper>
      {/* User profile */}
      <UserProfile user={userData} badge={true} />

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
    </ScrollViewWrapper>
  );
};

export default ProfileScreen;
