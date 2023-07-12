import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import DefaultText from '../../../components/defaulttext-componet'
import { socialIcons } from '../../../constants'

const Footer = () => {
	const navigation = useNavigation()
	return (
		<>
			{/* Divider line */}
			<View className="pt-[40px] flex-row items-center">
				<View className="bg-gray--2 h-[1px] flex-grow" />
				<DefaultText className="p-3 text-gray--4 font-semibold">OR</DefaultText>
				<View className="bg-gray--2 h-[1px] flex-grow" />
			</View>

			{/* Social media icon */}
			<View className="flex-row justify-between space-x-3 pt-5">
				<TouchableOpacity className="bg-gray--3 flex-grow p-4 flex-row items-center justify-center rounded-3xl">
					<Image
						source={socialIcons.google}
						className="h-[25px] w-[25px] rounded-full"
					/>
				</TouchableOpacity>
				<TouchableOpacity className="bg-gray--3 p-4 flex-grow flex-row items-center justify-center rounded-3xl">
					<Image
						source={socialIcons.fb}
						className="h-[25px] w-[25px] rounded-full"
					/>
				</TouchableOpacity>
			</View>

			{/* Footer */}
			<View className="items-center">
				<View className="pt-[35px] flex-row gap-1 items-baseline">
					<DefaultText className="font-lato leading-5">
						Don't have an account?
					</DefaultText>
					<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
						<DefaultText className="font-lato font-bold leading-5 ">
							Register
						</DefaultText>
					</TouchableOpacity>
				</View>
			</View>
		</>
	)
}

export default Footer
