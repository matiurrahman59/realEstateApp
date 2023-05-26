import { SafeAreaView } from 'react-native';
import { DEVICE } from '../constants';

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: DEVICE.statusBar,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
