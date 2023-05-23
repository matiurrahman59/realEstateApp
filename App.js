// import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
// import {
//   Raleway_400Regular,
//   useFonts as useRaleway,
// } from '@expo-google-fonts/raleway';

import { Navigator } from './src/navigation';

export default function App() {
  // const [raleWayFontLoaded] = useRaleway({
  //   Raleway_400Regular,
  // });

  // const [latoFontLoaded] = useLato({
  //   Lato_400Regular,
  // });

  // if (!raleWayFontLoaded || !latoFontLoaded) {
  //   return null;
  // }

  return <Navigator />;
}
