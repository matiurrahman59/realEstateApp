import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato'
import {
	Raleway_400Regular,
	useFonts as useRaleway,
} from '@expo-google-fonts/raleway'

import {
	Montserrat_400Regular,
	useFonts as useMontserrat,
} from '@expo-google-fonts/montserrat'
import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

import { Navigator } from './src/navigation'
import store from './src/store/store'
import { Provider } from 'react-redux'

export default function App() {
	const [raleWayFontLoaded] = useRaleway({
		Raleway_400Regular,
	})

	const [latoFontLoaded] = useLato({
		Lato_400Regular,
	})

	const [MontserratFontLoaded] = useMontserrat({
		Montserrat_400Regular,
	})

	if (!raleWayFontLoaded || !latoFontLoaded || !MontserratFontLoaded) {
		return null
	}

	return (
		<Provider store={store}>
			<Navigator />
			<StatusBar style="auto" />
			<Toast />
		</Provider>
	)
}
