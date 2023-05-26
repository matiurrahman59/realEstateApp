import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CategoryList = ({ category }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className='pl-5 pt-5'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category?.map((item, i) => {
          const isActive = item.id === activeCategory;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveCategory(item.id)}
              className={`py-[18px] px-6 rounded-full mr-[10px] ${
                isActive ? 'bg-secondary' : 'bg-gray--3'
              }`}
            >
              <Text
                className={`text-xs tracking-wide font-raleway ${
                  isActive ? 'text-white font-bold' : 'font-medium'
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryList;
