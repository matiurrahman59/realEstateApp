import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'

import TouchableButton from '../../../components/button-component'
import DefaultText from '../../../components/defaulttext-componet'
import Footer from '../components/footer-component'
import HeadingText from '../components/headingtext-component'
import CustomInput from '../../../components/custominput-component'
import useAsyncStorage from '../../../hooks/useStorage'
import { setUser } from '../../../store/userSlice'
import ButtonText from '../../../components/buttonText-component'

export const EMAIL_REGEX = /\S+@\S+\.\S+/ // google: email regex JavaScript

const LoginScreen = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [loading, setLoading] = useState(false)
	const { control, handleSubmit } = useForm()
	const dispatch = useDispatch()

	const [value] = useAsyncStorage('@user')

	// form submit handler
	const onSubmit = async data => {
		setLoading(true)
		setTimeout(() => {
			if (
				value &&
				data.email === value.email &&
				data.password === value.password
			) {
				dispatch(setUser(value))
				setLoading(false)
			} else {
				setLoading(false)
				Toast.show({
					type: 'error',
					text1: 'Email or password is incorrect!',
				})
			}
		}, 2000)
	}

	return (
		<View className="flex-1 bg-white px-5">
			<HeadingText textOne="Let's" textTwo="Sign In" />

			<View className="pt-8 space-y-4">
				{/* email input */}
				<View className="relative justify-center">
					<CustomInput
						control={control}
						name="email"
						placeHolder="Email"
						rules={{
							required: 'Email is required',
							pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
						}}
					>
						<TouchableOpacity className="absolute right-0 p-4">
							<Ionicons name="mail-outline" size={20} color="#252B5C" />
						</TouchableOpacity>
					</CustomInput>
				</View>

				{/* password input */}
				<View className="relative justify-center">
					<CustomInput
						control={control}
						name="password"
						placeHolder="Password"
						secureTextEntry={!showPassword}
						rules={{
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password should be minimum 6 characters long',
							},
						}}
					>
						<TouchableOpacity
							onPress={() => setShowPassword(!showPassword)}
							className="absolute right-0 p-4"
						>
							<Ionicons
								name={
									showPassword ? 'lock-open-outline' : 'lock-closed-outline'
								}
								size={20}
								color="#252B5C"
							/>
						</TouchableOpacity>
					</CustomInput>
				</View>

				{/* Forgot and show password button */}
				<View className="flex-row justify-between items-center">
					<TouchableOpacity className="py-2 pr-3">
						<DefaultText className="font-lato font-semibold leading-5">
							Forgot password?
						</DefaultText>
					</TouchableOpacity>
					<TouchableOpacity
						className="py-2 pl-3"
						onPress={() => setShowPassword(!showPassword)}
					>
						<DefaultText className="font-lato font-semibold leading-5">
							{showPassword ? 'hide password' : 'Show password'}
						</DefaultText>
					</TouchableOpacity>
				</View>

				{/* Login button */}
				<View className="items-center w-full">
					<TouchableButton
						contentContainerStyle="w-[80vw]"
						onPress={handleSubmit(onSubmit)}
						disabled={loading}
						isLoading={loading}
					>
						{loading ? (
							<ActivityIndicator animating={true} color="white" />
						) : (
							<>
								<Avatar.Icon
									size={30}
									icon="email-outline"
									style={{ backgroundColor: 'transparent' }}
								/>
								<ButtonText type="primary">Login</ButtonText>
							</>
						)}

						{/* </View> */}
					</TouchableButton>
				</View>

				{/* Social icon */}
				<Footer />
			</View>
		</View>
	)
}

export default LoginScreen
