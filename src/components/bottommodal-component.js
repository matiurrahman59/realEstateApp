import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo } from 'react';
import { Platform, View } from 'react-native';

// const BottomModal = ({bottomSheetModalRef, snapPoints, handleSheetChanges}) => {
const BottomModal = ({ bottomSheetModalRef, content }) => {
  const iosShadow = Platform.OS === 'ios' && {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  };

  // variables
  const snapPoints = useMemo(() => ['55%'], []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={
        iosShadow || {
          borderRadius: 50,
          elevation: 20,
          shadowColor: 'black',
        }
      }
    >
      <View className='flex-1 mx-6 mt-3'>{content}</View>
    </BottomSheetModal>
  );
};

export default BottomModal;
