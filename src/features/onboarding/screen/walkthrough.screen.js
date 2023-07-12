import React, { useRef, useState } from 'react'
import {
	FlatList,
	Image,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native'

import TouchableButton from '../../../components/button-component'
import { BrandLogo, DEVICE, onBoardingData } from '../../../constants'
import OnboardingSlide from '../components/onboardingSlide-component'
import Pagination from '../components/pagination-component'
import ButtonText from '../../../components/buttonText-component'

const WalkthroughScreen = ({ navigation }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const ref = useRef()

	const updateCurrentSlideIndex = e => {
		const contentOffsetX = e.nativeEvent.contentOffset.x
		const currentIndex = Math.round(contentOffsetX / DEVICE.width)
		setCurrentSlideIndex(currentIndex)
	}

	const goToNextSlide = () => {
		const nextSlideIndex = currentSlideIndex + 1
		if (nextSlideIndex != onBoardingData.length) {
			const offset = nextSlideIndex * DEVICE.width
			ref?.current.scrollToOffset({ offset })
			setCurrentSlideIndex(currentSlideIndex + 1)
		}
	}

	const skip = () => {
		const lastSlideIndex = onBoardingData.length - 1
		const offset = lastSlideIndex * DEVICE.width
		ref?.current.scrollToOffset({ offset })
		setCurrentSlideIndex(lastSlideIndex)
	}

	const navigateToAuthScreen = () => {
		navigation.navigate('AuthHomePage')
	}

	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: DEVICE.statusBar,
			}}
		>
			<View className="flex-row justify-between items-center px-6">
				<Image source={BrandLogo} className="h-[75px] w-[80px] -ml-4" />
				<TouchableOpacity
					className="h-[38px] w-[86px] items-center justify-center rounded-full bg-gray--1"
					onPress={skip}
				>
					<ButtonText type="small">skip</ButtonText>
				</TouchableOpacity>
			</View>

			<FlatList
				ref={ref}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				onMomentumScrollEnd={updateCurrentSlideIndex}
				data={onBoardingData}
				renderItem={({ item, index }) => <OnboardingSlide item={item} />}
			/>

			<View className="absolute bottom-0 left-0 right-0 items-center justify-center py-8">
				<Pagination currentSlideIndex={currentSlideIndex} />
				<View className="flex-row items-center mt-3">
					<TouchableButton
						onPress={
							currentSlideIndex === 2 ? navigateToAuthScreen : goToNextSlide
						}
						contentContainerStyle="w-[190px] h-[50px] ml-4 rounded-md bg-primary"
					>
						<ButtonText type="primary">
							{currentSlideIndex === 2 ? 'Get Started' : 'Next'}
						</ButtonText>
					</TouchableButton>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default WalkthroughScreen
