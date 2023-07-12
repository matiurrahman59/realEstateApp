import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import TouchableButton from '../../../components/button-component'
import DefaultText from '../../../components/defaulttext-componet'
import HeadingText from '../components/headingtext-component'
import CustomInput from '../../../components/custominput-component'
import { EMAIL_REGEX } from './login.screen'
import ButtonText from '../../../components/buttonText-component'

const SignUpScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const { control, handleSubmit, watch } = useForm({
		defaultValues: {
			fullName: 'Matiur Rahman',
			email: 'matiur@gmail.com',
			password: '123456',
			confirmPassword: '123456',
		},
	})
	const pwd = watch('password')

	// form submit handler
	const onSubmit = data => {
		setLoading(true)
		setTimeout(() => {
			data.otp = '2468'
			delete data.confirmPassword
			setLoading(false)

			Toast.show({
				type: 'success',
				text1: 'Your verification Code: 2468',
			})
			navigation.navigate('OTP', data)
		}, 2000)
	}

	return (
		<View className="flex-1 bg-white px-5">
			<HeadingText textOne="Create your" textTwo="account" />
			<DefaultText className="pt-5 font-lato leading-5 text-bodyText">
				quis nostrud exercitation ullamco laboris nisi ut
			</DefaultText>

			<View className="pt-8 space-y-4">
				{/* name input */}
				<View className="relative justify-center">
					<CustomInput
						control={control}
						name="fullName"
						placeHolder="Full Name"
						rules={{ required: 'Name required' }}
					>
						<View className="absolute right-0 p-4">
							<Ionicons name="person-outline" size={20} color="#252B5C" />
						</View>
					</CustomInput>
				</View>

				{/* email input */}
				<View className="relative justify-center">
					<CustomInput
						control={control}
						name="email"
						placeHolder="Email"
						rules={{
							required: 'Email required',
							pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
						}}
					>
						<View className="absolute right-0 p-4">
							<Ionicons name="mail-outline" size={20} color="#252B5C" />
						</View>
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

				{/* confirm password input */}
				<View className="relative justify-center">
					<CustomInput
						control={control}
						name="confirmPassword"
						placeHolder="Confirm Password"
						secureTextEntry={!showPassword}
						rules={{
							validate: value => value === pwd || 'Password do not match',
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

				{/* terms and forgot password button */}
				<View className="flex-row justify-between items-center">
					<TouchableOpacity className="py-2 pr-3">
						<DefaultText className="font-lato font-semibold leading-5">
							Terms of service
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

				{/* Signup button */}
				<View className="items-center pt-8">
					<TouchableButton
						onPress={handleSubmit(onSubmit)}
						disabled={loading}
						isLoading={loading}
					>
						{loading ? (
							<ActivityIndicator animating={true} color="white" />
						) : (
							<>
								<ButtonText type="primary">Register</ButtonText>
							</>
						)}
					</TouchableButton>
				</View>
			</View>
		</View>
	)
}

export default SignUpScreen
