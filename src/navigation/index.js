import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AppNavigator from './app.navigator';
import WalkthroughNavigator from './walkthrough.navigator';

export const Navigator = () => {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <WalkthroughNavigator />}
    </NavigationContainer>
  );
};
