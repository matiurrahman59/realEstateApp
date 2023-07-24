import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'

import TouchableButton from '../../../components/button-component'
import DefaultText from '../../../components/defaulttext-componet'
import ButtonText from '../../../components/buttonText-component'
import { useNavigation } from '@react-navigation/native'
const locations = [
	{
		id: 1,
		address: 'Srengseng, Kembangan, West Jakarta City, Jakarta 11630',
	},
	{
		id: 2,
		address: 'Petompon, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50232',
	},
]

const BottomSheetContent = () => {
	const navigation = useNavigation()
	const [activeLocation, setActiveLocation] = useState(1)

	return (
		<>
			<View className="flex-row justify-between items-center">
				<DefaultText className="font-bold text-[18px] font-lato leading-[22px]">
					Select Location
				</DefaultText>
				<View className="bg-secondary  rounded-[35px]">
					<DefaultText className="text-white font-medium py-[19px] px-[30px]">
						Edit
					</DefaultText>
				</View>
			</View>

			{/* Location */}
			<View className="space-y-[10px] pt-[35px]">
				{locations.map(item => {
					const isActive = item.id === activeLocation

					return (
						<TouchableOpacity
							key={item.id}
							onPress={() => setActiveLocation(item.id)}
							className={`${
								isActive ? 'bg-secondary' : 'border-[#ECEDF3] border'
							}  p-[15px] flex-row space-x-4 items-center rounded-[25px]`}
						>
							<Avatar.Icon
								icon={isActive ? 'map-marker' : 'map-marker-outline'}
								color={isActive ? 'white' : '#53587A'}
								size={50}
								style={{
									backgroundColor: isActive ? '#658495' : '#ECEDF3',
								}}
							/>
							<Text
								className={`${
									isActive ? 'text-white' : 'text-bodyText'
								} w-[60vw]  font-raleway tracking-wide  text-xs leading-5`}
							>
								{item.address}
							</Text>
						</TouchableOpacity>
					)
				})}
			</View>

			{/* Button */}
			<View className="my-6 items-center">
				<TouchableButton onPress={() => navigation.navigate('Location')}>
					<ButtonText type="primary">Choose location</ButtonText>
				</TouchableButton>
			</View>
		</>
	)
}

export default BottomSheetContent
