import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import DefaultText from '../../../components/defaulttext-componet';
import { userIMage, vrIcon } from '../../../constants';
import FeatureList from '../components/estatefeaturelist-component';

const EstateDetailsScreen = ({ route }) => {
  const item = route.params;

  return (
    <ScrollView className='bg-white'>
      <StatusBar style='inverted' />

      {/* Image */}
      <View className='w-full h-[60vh] px-3'>
        <Image
          source={{ uri: item.imageUrl }}
          className='w-full h-full rounded-3xl'
        />
      </View>

      {/* Details */}
      <View className='px-6 pt-6'>
        {/* Name & price details */}
        <View>
          <View className='flex-row justify-between items-center'>
            <DefaultText className='font-lato font-bold text-2xl leading-10'>
              {item.name}
            </DefaultText>
            <DefaultText className='font-semibold text-2xl font-montserrat tracking-normal leading-10'>
              $ {item.price}
            </DefaultText>
          </View>
          <View className='flex-row justify-between items-center'>
            <View className='flex-row items-center gap-1'>
              <Ionicons name='location' size={9} color='#252B5C' />
              <DefaultText className='font-normal leading-4 text-xs tracking-normal text-bodyText'>
                {item.address}
              </DefaultText>
            </View>
            <DefaultText className='font-normal leading-4 text-xs  text-bodyText'>
              per month
            </DefaultText>
          </View>
        </View>

        {/* Rent or buy */}
        <View className='flex-row justify-between items-center py-5 border-b-[1px] border-gray--1'>
          <View className='flex-row items-center space-x-6'>
            <TouchableOpacity className='py-4 px-6 bg-primary rounded-[20px]'>
              <DefaultText className='font-medium text-xs leading-3'>
                Rent
              </DefaultText>
            </TouchableOpacity>
            <TouchableOpacity className='py-4 px-6 bg-gray--3 rounded-[20px]'>
              <DefaultText className='font-medium text-xs leading-3'>
                Buy
              </DefaultText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className='bg-gray--3 p-[14px] rounded-full'>
            <Image source={vrIcon} width={22} height={22} />
          </TouchableOpacity>
        </View>

        {/* Message agent */}
        <View className='p-6 my-5 bg-gray--3 rounded-[20px]'>
          <View className='flex-row justify-between items-center'>
            <View className='flex-row items-center space-x-6'>
              <Avatar.Image size={45} source={userIMage} />
              <View className='space-y-1'>
                <DefaultText className='text-[14px] font-bold leading-4 font-lato'>
                  Anderson
                </DefaultText>

                <DefaultText className='text-[10px] leading-3 text-bodyText'>
                  Real Estate Agent
                </DefaultText>
              </View>
            </View>
            <AntDesign name='message1' size={25} color='black' />
          </View>
        </View>
      </View>

      {/* Feature list */}
      <View className='pl-6 pb-8'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeatureList quantity={2} title='Bedroom' icon='bed-empty' />
          <FeatureList quantity={1} title='Bathroom' icon='shower' />
          <FeatureList quantity='1200 sqft' icon='signal-distance-variant' />
          <FeatureList quantity={1} title='Balcony' icon='balcony' />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default EstateDetailsScreen;
