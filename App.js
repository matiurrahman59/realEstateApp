import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Raleway_400Regular,
  useFonts as useRaleway,
} from '@expo-google-fonts/raleway';

import {
  Montserrat_400Regular,
  useFonts as useMontserrat,
} from '@expo-google-fonts/montserrat';
import { StatusBar } from 'expo-status-bar';

import { Navigator } from './src/navigation';

export default function App() {
  const [raleWayFontLoaded] = useRaleway({
    Raleway_400Regular,
  });

  const [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  const [MontserratFontLoaded] = useMontserrat({
    Montserrat_400Regular,
  });

  if (!raleWayFontLoaded || !latoFontLoaded || !MontserratFontLoaded) {
    return null;
  }

  return (
    <>
      <Navigator />
      <StatusBar style='auto' />
    </>
  );
}
