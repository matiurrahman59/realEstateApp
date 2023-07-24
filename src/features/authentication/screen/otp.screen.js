import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
	Keyboard,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'

import DefaultText from '../../../components/defaulttext-componet'
import HeadingText from '../components/headingtext-component'
import CustomCountDown from '../components/timer-component'
import { setUserData } from '../../../store/userSlice'

const OtpScreen = ({ route, navigation }) => {
	const data = route.params
	const dispatch = useDispatch()

	// input related state
	const [otp, setOtp] = useState(['', '', '', ''])
	const [focusedInput, setFocusedInput] = useState(0)
	const [isInputComplete, setIsInputComplete] = useState(false)
	const refs = [useRef(), useRef(), useRef(), useRef()]
	const [resetTimer, setResetTimer] = useState(false)

	// Focus on the first input when the component mounts
	useEffect(() => {
		refs[0].current.focus()
	}, [])

	// header shown false when loading spinner visible
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: !isInputComplete,
		})
	}, [isInputComplete, navigation])

	// checking input filled or not
	useEffect(() => {
		const hasEmptyInput = otp.some(digit => digit === '')
		setIsInputComplete(!hasEmptyInput)
	}, [otp])

	// reset timer
	const timerResetHandler = () => {
		setResetTimer(true)
	}

	const inputChangeHandler = (text, index) => {
		// Update the corresponding OTP digit
		setOtp(prevOtp => {
			const newOtp = [...prevOtp]
			newOtp[index] = text

			return newOtp
		})

		// Move focus to the next input
		if (text.length === 1 && index < refs.length - 1) {
			refs[index + 1].current.focus()
		}
	}

	useEffect(() => {
		if (isInputComplete) {
			Keyboard.dismiss()
			setTimeout(() => {
				if ((inputValues = otp.join('') === data.otp)) {
					Toast.show({
						type: 'success',
						text1: 'Account created successfully 🥳',
					})
					dispatch(setUserData(data))
				} else {
					setIsInputComplete(false)
					setOtp(['', '', '', ''])
					Toast.show({
						type: 'error',
						text1: 'Invalid code 💣',
						text2: 'Try to resend OTP agin!',
					})
					refs[0].current.focus()
				}
			}, 2000)
		}
	}, [isInputComplete])

	return (
		<View className="flex-1 bg-white px-5 relative">
			{isInputComplete && (
				<View
					style={{ ...StyleSheet.absoluteFillObject }}
					className=" bg-gray-500/75 z-50 items-center justify-center"
				>
					<ActivityIndicator animating={true} color="#8BC83F" size="large" />
				</View>
			)}

			<HeadingText textOne="Let's" textTwo="Enter the code" />
			<DefaultText className="pt-5 font-lato leading-5 text-bodyText">
				Enter the 4 digit code that we just sent to you mail
			</DefaultText>
			<DefaultText className="font-lato font-bold leading-5">
				{data.email}
			</DefaultText>

			<View className="pt-20 flex-row items-center space-x-3">
				{otp.map((digit, index) => (
					<TextInput
						key={index}
						ref={refs[index]}
						value={digit}
						onChangeText={text => inputChangeHandler(text, index)}
						keyboardType="number-pad"
						onFocus={() => setFocusedInput(index)}
						maxLength={1}
						className={`grow border rounded-xl h-[70px] bg-gray--3 text-center ${
							focusedInput === index ? 'border-secondary' : 'border-transparent'
						}`}
					/>
				))}
			</View>

			<View className="pt-24 items-center space-y-4">
				<View className="bg-gray--3 px-4 py-2 flex-row items-center  rounded-full space-x-2">
					<Ionicons name="time-outline" size={20} color="#252B5C" />
					<View>
						<CustomCountDown
							initialTime={120}
							resetTimer={resetTimer}
							setResetTimer={setResetTimer}
						/>
					</View>
				</View>

				<View className="flex-row justify-center items-center gap-1">
					<DefaultText className="leading-5 text-bodyText">
						Didn't receive the OTP?
					</DefaultText>
					<TouchableOpacity
						onPress={() => timerResetHandler()}
						className="bg-transparent py-2"
					>
						<DefaultText className="font-bold leading-5 text-secondary">
							Resend OTP
						</DefaultText>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

// OtpScreen.navigationOptions = ({ navigation }) => ({
// 	headerShown: !navigation.state.params.isInputComplete,
// 	headerShown: false,
// })

export default OtpScreen

// const styles = StyleSheet.create({
// 	overlay: {
// 		...StyleSheet.absoluteFillObject,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: 'rgba(0, 0, 0, 0.5)',
// 	},
// 	spinnerContainer: {
// 		backgroundColor: '#fff',
// 		padding: 20,
// 		borderRadius: 8,
// 	},
// })
