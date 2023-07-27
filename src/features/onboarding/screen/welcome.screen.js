import { LinearGradient } from 'expo-linear-gradient'
import { Image, Text, View } from 'react-native'

// internal import
import TouchableButton from '../../../components/button-component'
import { BrandLogo, welcomeImage } from '../../../constants'
import ButtonText from '../../../components/buttonText-component'

const WelcomeScreen = ({ navigation }) => {
	return (
		<View className="flex-1 items-center justify-center relative">
			<Image source={welcomeImage} className="absolute -z-10 w-full h-full" />
			<LinearGradient
				colors={['rgba(33, 98, 138, .3)', 'rgba(35, 79, 104, 1)']}
				className="absolute w-full h-full"
			/>
			<LinearGradient
				colors={['rgba(33, 98, 138, 0.00)', '#1F4C6B']}
				className="absolute w-full bottom-0 h-1/2"
			/>
			<View>
				<View className="w-[172px] h-[155px]">
					<Image source={BrandLogo} className="w-full h-full  scale-150" />
				</View>
				<Text className="text-white text-4xl text-center -mt-8">{`Rise \n Real Estate`}</Text>
			</View>
			<View className="absolute bottom-5 items-center">
				<TouchableButton
					label="Lets start"
					contentContainerStyle="w-[190px] h-[54px]"
					onPress={() => navigation.navigate('Walkthrough')}
				>
					<ButtonText type="primary">Lets start</ButtonText>
				</TouchableButton>
				<View className="mt-6">
					<Text className="opacity-80 text-[10px] tracking-wider leading-3 text-white text-center">
						Made with love ♥
					</Text>
					<Text className="text-[10px] leading-3 text-white text-center">
						v.1.0
					</Text>
				</View>
			</View>
		</View>
	)
}

export default WelcomeScreen
