import { BackHandler, Image, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import TouchableButton from '../../../components/button-component'
import { DEVICE, logInImages } from '../../../constants/index'
import Footer from '../components/footer-component'
import HeadingText from '../components/headingtext-component'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import ButtonText from '../../../components/buttonText-component'

const AuthHomeScreen = ({ navigation }) => {
	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				// Prevent the default behavior of going back
				return true
			}

			BackHandler.addEventListener('hardwareBackPress', onBackPress)

			return () => {
				BackHandler.removeEventListener('hardwareBackPress', onBackPress)
			}
		}, []),
	)

	return (
		<View className="flex-1 bg-white">
			{/* Image container */}
			<View className="flex-row flex-wrap gap-2 justify-center">
				<Image
					source={logInImages.image1}
					style={{ width: (DEVICE.width / 2) * 0.9 }}
					className="h-[174px] rounded-[20px]"
				/>
				<Image
					source={logInImages.image2}
					style={{ width: (DEVICE.width / 2) * 0.9 }}
					className={`h-[174px] rounded-[20px] w-1/2`}
				/>
				<Image
					source={logInImages.image3}
					style={{ width: (DEVICE.width / 2) * 0.9 }}
					className="h-[174px] rounded-[20px]"
				/>
				<Image
					source={logInImages.image4}
					style={{ width: (DEVICE.width / 2) * 0.9 }}
					className="h-[174px] rounded-[20px]"
				/>
			</View>

			<View className="px-5">
				<HeadingText textOne="Ready to" textTwo="explore?" />
				{/* Button */}
				<View className="items-center pt-[50px]">
					<TouchableButton onPress={() => navigation.navigate('Login')}>
						<Avatar.Icon
							size={30}
							icon="email-outline"
							style={{ backgroundColor: 'transparent' }}
						/>
						<ButtonText type="primary">Continue with Email</ButtonText>
					</TouchableButton>
				</View>

				<Footer />
			</View>
		</View>
	)
}

export default AuthHomeScreen
