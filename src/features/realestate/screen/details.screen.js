import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import TouchableButton from '../../../components/button-component';
import DefaultText from '../../../components/defaulttext-componet';
import Icon from '../../../components/icon-component';
import SectionHeader from '../../../components/seactionheader-component';
import { detailsImage, statusBar, userIMage, vrIcon } from '../../../constants';
import FeatureList from '../components/estatefeaturelist-component';

const EstateDetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setSelectedImage(item.imageUrl);
  }, [item]);

  const setNewImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <ScrollView className='bg-white'>
      <StatusBar style='inverted' />

      {/* Image */}
      <View className='w-full h-[60vh] px-3 relative'>
        <Image
          source={{ uri: selectedImage }}
          className='w-full h-full rounded-3xl'
        />

        {/* Left icon */}
        <Icon
          iconName='chevron-back'
          bgColor='#DFDFDF'
          color='#252B5C'
          boxSize={50}
          size={20}
          onPress={() => navigation.goBack()}
          style={{
            top: statusBar,
          }}
          className='absolute left-6'
        />

        {/* right side icons */}
        <View
          style={{
            top: statusBar,
          }}
          className='absolute right-6 flex-row items-center space-x-4'
        >
          <Icon
            iconName='cloud-upload-outline'
            bgColor='#DFDFDF'
            color='#252B5C'
            boxSize={50}
            size={20}
          />
          <View>
            <Icon
              iconName='heart'
              bgColor='#8BC83F'
              color='white'
              boxSize={50}
              size={20}
            />
          </View>
        </View>

        {/* bottom left absolute items*/}
        <View className='absolute bottom-3 left-6 space-x-[2px] flex-row'>
          <View className='py-[15px] px-6 rounded-full mr-[10px] bg-secondary'>
            <View className='flex-row items-center space-x-1'>
              <Ionicons name='star' size={15} color='#FFC42D' />
              <DefaultText className='font-montserrat text-[14px] leading-[17px] font-bold text-white'>
                4.9
              </DefaultText>
            </View>
          </View>

          <View className='py-[15px] px-6 rounded-full mr-[10px] bg-secondary'>
            <DefaultText className='font-medium text-white'>
              Apartment
            </DefaultText>
          </View>
        </View>

        {/* Bottom right absolute items */}
        <View className='absolute bottom-2 right-6 space-y-2'>
          <TouchableOpacity
            onPress={() => setNewImage(detailsImage.imageOne)}
            className='bg-white p-[2px] h-[60px] w-[60px] rounded-[18px]'
          >
            <Image
              source={{ uri: detailsImage.imageOne }}
              className='h-full w-full rounded-[18px]'
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setNewImage(detailsImage.imageTwo)}
            className='bg-white p-[2px] h-[60px] w-[60px] rounded-[18px]'
          >
            <Image
              source={{ uri: detailsImage.imageTwo }}
              className='h-full w-full rounded-[18px]'
            />
          </TouchableOpacity>

          <TouchableOpacity className='bg-white p-[2px] h-[60px] items-center justify-center w-[60px] rounded-[18px]'>
            <Image
              source={{ uri: item.imageUrl }}
              blurRadius={8}
              className='h-full w-full rounded-[18px] absolute opacity-95'
            />
            <View>
              <DefaultText className='text-white font-montserrat font-medium text-[18px] leading-[22px]'>
                +3
              </DefaultText>
            </View>
          </TouchableOpacity>
        </View>
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

      <View className='px-6'>
        {/* Location & facilities */}
        <View>
          <SectionHeader leftTitle='Location & Public Facilities' />
          <View className='flex-row items-center space-x-4 pt-5 pb-4'>
            <View className='bg-gray--3 p-[15px] rounded-full'>
              <Ionicons name='location-outline' size={20} color='#53587A' />
            </View>
            <DefaultText className='text-xs w-[90%] leading-[13px] text-[#53587A] tracking-normal font-normal'>
              St. Cikoko Timur, Kec. Pancoran, Jakarta Selatan, Indonesia 12770
            </DefaultText>
          </View>
        </View>

        {/* Location */}
        <TouchableOpacity className='border-[1px] border-gray--2 rounded-full'>
          <View className='flex-row justify-between items-center '>
            <View className='flex-row items-center space-x-4'>
              <View className='p-[15px] rounded-full'>
                <Ionicons name='location' size={20} color='#53587A' />
              </View>
              <View className='flex-row space-x-1 items-center'>
                <DefaultText className='font-montserrat font-bold text-xs leading-3'>
                  2.5 km
                </DefaultText>
                <DefaultText>from your location</DefaultText>
              </View>
            </View>
            <View className='p-[15px] rounded-full'>
              <Ionicons name='chevron-down-outline' size={15} color='#53587A' />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* other facilities */}
      <View className='pl-6 py-5'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeatureList quantity={2} title='Hospital' />
          <FeatureList quantity={4} title='Gas stations' />
          <FeatureList quantity='2' title='Schools' />
        </ScrollView>
      </View>

      {/* Cost of living */}
      <View className='pt-7'>
        <View className='pl-6'>
          <SectionHeader leftTitle='Cost of living' rightTitle='view details' />
        </View>

        <View className='bg-gray--3 p-4 mx-6 rounded-[20px]'>
          <View className='flex-row items-center'>
            <DefaultText className='font-montserrat font-bold text-[18px] leading-[22px]'>
              $ 830
            </DefaultText>
            <DefaultText className='font-semibold text-xs'>/month</DefaultText>
          </View>
          <DefaultText className='pt-[2px] text-xs leading-[11px]'>
            From average citizen spend around this location
          </DefaultText>
        </View>
      </View>

      {/* Reviews */}
      <View className='py-10'>
        <View className='pl-6'>
          <SectionHeader leftTitle='Reviews' />
        </View>

        <View className='px-6'>
          {/* Review card */}
          <View className='flex-row justify-between items-center bg-secondary/60 rounded-[20px] p-4'>
            {/* Icon */}
            <View className='flex-row space-x-4 items-center'>
              <View className='p-[15px] rounded-[20px] bg-black/10'>
                <Ionicons
                  name='star'
                  size={23}
                  color='#FFC42D'
                  className='p-[15px]'
                />
              </View>

              <View className='space-y-[3px]'>
                <View className='flex-row items-center space-x-[6px]'>
                  <View className='flex-row items-center space-x-[2px]'>
                    <Ionicons name='star' size={12} color='#FFC42D' />
                    <Ionicons name='star' size={12} color='#FFC42D' />
                    <Ionicons name='star' size={12} color='#FFC42D' />
                    <Ionicons name='star' size={12} color='#FFC42D' />
                    <Ionicons name='star-half' size={12} color='#FFC42D' />
                  </View>
                  <DefaultText className='font-montserrat font-bold text-[18px] leading-[22px]'>
                    {item.rating}
                  </DefaultText>
                </View>
                <DefaultText>From 12 reviews</DefaultText>
              </View>
            </View>

            {/* User image */}
            <View className='flex-row items-center'>
              <View className=' bg-white p-[2px] rounded-full'>
                <Avatar.Image source={userIMage} size={30} />
              </View>
              <View className=' bg-white p-[2px] -ml-2 rounded-full'>
                <Avatar.Image source={userIMage} size={30} />
              </View>
              <View className=' bg-white p-[2px] -ml-2 rounded-full'>
                <Avatar.Image source={userIMage} size={30} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Review details */}
      <View className='px-6 pb-5 space-y-2'>
        <View className='bg-gray--3 rounded-[20px] p-[10px]'>
          <View className='flex-row space-x-[10px]'>
            <Avatar.Image source={userIMage} size={50} />
            <View className='flex-1 pt-[10px] space-y-2'>
              <View className='flex-row items-center justify-between'>
                <DefaultText className='font-bold'>Kay Swanson</DefaultText>
                <View className='flex-row items-center space-x-[2px]'>
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star-half' size={12} color='#FFC42D' />
                </View>
              </View>
              <DefaultText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperia.
              </DefaultText>

              <DefaultText className='font-montserrat text-[10px] text-gray--4 tracking-tight'>
                12 Days ago
              </DefaultText>
            </View>
          </View>
        </View>

        {/* Review no 2 */}
        <View className='bg-gray--3 rounded-[20px] p-[10px]'>
          <View className='flex-row space-x-[10px]'>
            <Avatar.Image source={userIMage} size={50} />
            <View className='flex-1 pt-[10px] space-y-2'>
              <View className='flex-row items-center justify-between'>
                <DefaultText className='font-bold'>Kay Swanson</DefaultText>
                <View className='flex-row items-center space-x-[2px]'>
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star' size={12} color='#FFC42D' />
                  <Ionicons name='star-half' size={12} color='#FFC42D' />
                </View>
              </View>
              <DefaultText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperia.
              </DefaultText>

              <DefaultText className='font-montserrat  text-[10px] text-gray--4 tracking-tight'>
                12 Days ago
              </DefaultText>
            </View>
          </View>
        </View>
      </View>

      {/* Button */}
      <View className='px-6 pb-5'>
        <TouchableButton
          label='View all reviews'
          contentContainerStyle='bg-gray--3'
          labelStyle='font-raleway tracking-wide text-secondary text-xs leading-[14px] py-[19px]'
        />
      </View>
    </ScrollView>
  );
};

export default EstateDetailsScreen;
