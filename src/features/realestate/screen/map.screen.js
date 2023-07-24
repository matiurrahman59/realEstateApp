import { View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import TouchableButton from '../../../components/button-component'
import ButtonText from '../../../components/buttonText-component'
import { useDispatch } from 'react-redux'
import { setUserLocation } from '../../../store/userSlice'

const MapScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [selectedLocation, setSelectedLocation] = useState()

	const selectLocationHandler = event => {
		const { latitude, longitude } = event.nativeEvent.coordinate
		setSelectedLocation({ lat: latitude, lng: longitude })
	}

	const savePickedLocationHandler = () => {
		dispatch(setUserLocation(selectedLocation))
		navigation.goBack()
	}

	return (
		<View className="flex-1 relative">
			<MapView className="h-full w-full" onPress={selectLocationHandler}>
				{selectedLocation && (
					<Marker
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng,
						}}
					/>
				)}
			</MapView>
			{selectedLocation && (
				<View className="absolute bottom-5 w-full items-center">
					<TouchableButton onPress={savePickedLocationHandler}>
						<ButtonText type="primary">Save your location</ButtonText>
					</TouchableButton>
				</View>
			)}
		</View>
	)
}

export default MapScreen
