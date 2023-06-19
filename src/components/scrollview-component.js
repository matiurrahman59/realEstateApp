import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const ScrollViewWrapper = ({ children, onScroll, style }) => {
  return (
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      className={`flex-1 bg-white px-5 ${style}`}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewWrapper;
