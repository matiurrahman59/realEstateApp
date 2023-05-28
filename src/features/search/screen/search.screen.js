import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CardInfo from '../../../components/cardinfo-component';
import DefaultText from '../../../components/defaulttext-componet';
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';
import { errIcon, topLocations } from '../../../constants';

const SearchScreen = ({ navigation }) => {
  const [dataShow, setDataShow] = useState(false);
  const [text, setText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('vertical');

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const featuredEstateList = useMemo(
    () => topLocations.flatMap((item) => item.estates),
    [topLocations]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting', userData)}
          className='mr-4 bg-gray--3 h-[50px] w-[50px] items-center justify-center rounded-full'
        >
          <FontAwesome name='sliders' size={24} color='#252B5C' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View className='flex-1 bg-white px-6 pt-5'>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor='#252B5C'
        className='bg-gray--3 text-red-500 placeholder:text-red-500'
        style={{
          borderRadius: 20,
        }}
      />

      <View className='flex-row justify-between items-center py-5'>
        <DefaultText className='font-medium font-lato leading-[22px] text-lg'>
          {`Found ${featuredEstateList.length} estates`}
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

      {/* Estate list */}
      {dataShow ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedTab === 'vertical' ? (
              <View className='pb-5 flex-row justify-between flex-wrap'>
                {featuredEstateList?.map((item) => (
                  <CardInfo item={item} key={item.id} />
                ))}
              </View>
            ) : (
              <View className='pb-5 items-center'>
                {featuredEstateList?.map((item) => (
                  <View key={item.id} className='mb-3'>
                    <HorizontalCardInfo item={item} style='w-full' />
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </>
      ) : (
        <View className='flex-1 items-center justify-center'>
          <View className='items-center'>
            <TouchableOpacity>
              <Image source={errIcon} width={142} height={142} />
            </TouchableOpacity>
            <View className='flex-row justify-center pt-3 pb-5 space-x-1 items-center'>
              <DefaultText className='font-lato text-2xl leading-40 font-medium'>
                Search
              </DefaultText>
              <DefaultText className='font-lato text-2xl leading-40 font-extrabold text-secondary'>
                not found
              </DefaultText>
            </View>
            <DefaultText className='max-w-[297px] text-xs text-bodyText'>
              Sorry, we can't find the real estates you are looking for. Maybe,
              a little spelling mistake?
            </DefaultText>
          </View>
        </View>
      )}

      {/* Empty component */}
    </View>
  );
};

export default SearchScreen;
