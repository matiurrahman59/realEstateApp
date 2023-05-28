import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'nativewind';
import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import { Avatar, Badge } from 'react-native-paper';

import DefaultText from '../../../components/defaulttext-componet';
import SectionHeader from '../../../components/seactionheader-component';
import {
  DEVICE,
  categoryList,
  topAgents,
  topLocations,
} from '../../../constants';
import CategoryList from '../components/categorylist-component';
import FeaturedEstates from '../components/featureditem-component';
import Location from '../components/location-component';
import NearbyEstates from '../components/nearbyestates-component';
import TopAgents from '../components/topagents-component';
import TopLocations from '../components/toplocations-component';

const userIMage = require('../../../assets/images/user-1.png');

const RealEstateScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const { colorScheme, setColorScheme } = useColorScheme();

  const featuredEstateList = useMemo(
    () => topLocations.flatMap((item) => item.estates),
    [topLocations]
  );

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white relative'>
        {/* Circle image */}
        <View className='absolute h-96 w-96 rounded-full bg-secondary/20 -top-28 -left-28 z-10' />

        <View
          className='z-20'
          style={{
            paddingTop: DEVICE.statusBar,
            paddingBottom: 20,
          }}
        >
          <View className='px-5 pt-2'>
            {/* Top header */}
            <View className='h-[50px]'>
              <View className='flex-row items-center justify-between'>
                <Location />
                <View className='flex-row space-x-2'>
                  <View className='w-[50px] h-[50px] flex items-center justify-center rounded-full border-primary border-2 bg-white'>
                    <View className='relative'>
                      <Ionicons
                        name='notifications-outline'
                        size={20}
                        color='#252B5C'
                      />
                      <View className='h-3 w-3 bg-white absolute -top-1 -right-1 flex justify-center items-center'>
                        <Badge size={6} />
                      </View>
                    </View>
                  </View>
                  <View className='w-[50px] border-gray--1 border-2 rounded-full flex items-center justify-center'>
                    <Avatar.Image size={44} source={userIMage} />
                  </View>
                </View>
              </View>
            </View>

            {/* Heading text */}
            <View className='mt-[35px] mb-5'>
              <View className='flex-row items-center space-x-1'>
                <DefaultText className='text-2xl font-lato leading-10 font-medium'>
                  Hey,
                </DefaultText>
                <DefaultText className='text-2xl leading-10 font-lato font-extrabold text-secondary'>
                  Jonathan!
                </DefaultText>
              </View>
              <DefaultText className='text-2xl font-lato leading-10 font-medium'>
                Let's start exploring
              </DefaultText>
            </View>

            {/* Search Bar */}
            <View className='px-4 py-6 bg-gray--3 rounded-xl flex-row items-center space-x-3'>
              <Ionicons name='search' size={20} color='#252B5C' />
              <TextInput
                placeholder='Search House, Apartment, etc'
                className='placeholder:text-gray--4 placeholder:font-raleway placeholder:text-sm leading-[14px] flex-grow'
                value={text}
                onChangeText={(text) => setText(text)}
              />

              <View className='border-l-2 border-gray--4 px-4'>
                <Ionicons name='mic-outline' size={20} color='#A1A5C1' />
              </View>
            </View>
          </View>

          <CategoryList category={categoryList} />

          {/* Featured Estates */}
          <View className='pl-6 mt-9'>
            <View>
              <SectionHeader
                leftTitle='Featured Estates'
                rightTitle='view all'
                onPress={() => navigation.navigate('FeatureList')}
              />
              <FeaturedEstates featuredList={featuredEstateList} />
            </View>
          </View>

          {/* Top locations */}
          <View className='pl-6 mt-9'>
            <View className='mb-9'>
              <SectionHeader
                leftTitle='Top Locations'
                rightTitle='explore'
                onPress={() => navigation.navigate('TopLocation')}
              />
              <TopLocations topLocations={topLocations} />
            </View>

            {/* Top agents */}
            <View className='mb-9'>
              <SectionHeader
                leftTitle='Top Estate Agent'
                rightTitle='explore'
              />
              <TopAgents topAgents={topAgents} />
            </View>

            {/* Nearby estates */}
            <View>
              <SectionHeader leftTitle='Explore Nearby Estates' />
              <NearbyEstates featuredList={featuredEstateList} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RealEstateScreen;
