import { View, Text } from 'react-native'
import React from 'react'
import TouchableButton from '../../../components/button-component'

const LocationPicker = () => {
	const getLocationHandler = () => {}

	const pickOnMapHandler = () => {}
	return (
		<View>
			<View></View>
			<View>
				<TouchableButton>Locate User</TouchableButton>
				<TouchableButton>Pick on Map</TouchableButton>
			</View>
		</View>
	)
}

export default LocationPicker
