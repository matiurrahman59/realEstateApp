import { View, Text, Alert } from 'react-native'

import {
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
} from 'expo-location'
import MapView, { Callout, Marker } from 'react-native-maps'

import HeadingText from '../../authentication/components/headingtext-component'
import DefaultText from '../../../components/defaulttext-componet'
import TouchableButton from '../../../components/button-component'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../../../store/userSlice'

const LocationScreen = ({ navigation }) => {
	const { location } = useSelector(state => state.user.user)
	const dispatch = useDispatch()

	const getLocationHandler = async () => {
		try {
			let { status } = await requestForegroundPermissionsAsync()

			if (status !== 'granted') {
				Alert.alert(
					'Insufficient Permissions!',
					'You need to grant location permissions to use this app.',
				)
				return
			}

			let location = await getCurrentPositionAsync({})

			dispatch(
				setUserLocation({
					lat: location.coords.latitude,
					lng: location.coords.longitude,
				}),
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View className="bg-white flex-1 px-5">
			<HeadingText textOne="Add your" textTwo="location" />
			<View className="rounded-3xl bg-gray-400 h-72 mt-8 relative overflow-hidden">
				<MapView
					className="w-full h-full"
					initialRegion={{
						latitude: 23.811056, // lat/lng--> center of the map
						longitude: 90.407608,
						latitudeDelta: 0.0922, // delta--> how much content besides the center visible
						longitudeDelta: 0.0421,
					}}
					region={{
						latitude: location?.lat,
						longitude: location?.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					zoomEnabled={false}
				>
					{location && (
						<Marker
							coordinate={{
								latitude: location?.lat,
								longitude: location?.lng,
							}}
						>
							<Callout>
								<Text>I'm here</Text>
							</Callout>
						</Marker>
					)}
				</MapView>

				<TouchableButton
					contentContainerStyle="w-full absolute bottom-0"
					onPress={() => navigation.navigate('Map')}
				>
					<DefaultText className="font-raleway text-white text-sm font-bold">
						Select on map
					</DefaultText>
				</TouchableButton>
			</View>
			<TouchableButton
				contentContainerStyle="w-full mt-2"
				onPress={getLocationHandler}
			>
				<DefaultText className="font-raleway text-white text-sm font-bold">
					Locate user
				</DefaultText>
			</TouchableButton>
		</View>
	)
}

export default LocationScreen
