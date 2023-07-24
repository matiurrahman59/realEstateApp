import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'

import AuthHomeScreen from '../features/authentication/screen/authhome.screen'
import LoginScreen from '../features/authentication/screen/login.screen'
import OtpScreen from '../features/authentication/screen/otp.screen'
import SignUpScreen from '../features/authentication/screen/signup.screen'
import WalkthroughScreen from '../features/onboarding/screen/walkthrough.screen'
import WelcomeScreen from '../features/onboarding/screen/welcome.screen'
import useAsyncStorage from '../hooks/useStorage'

const Stack = createStackNavigator()

const WalkthroughNavigator = () => {
	const [loading, setLoading] = useState(true)
	const [value, setValue] = useAsyncStorage('firstRender')

	useEffect(() => {
		checkFirstRender()
	}, [])

	const checkFirstRender = async () => {
		try {
			if (value !== null) {
				setLoading(false)
			} else {
				setValue('false')
				setLoading(false)
			}
		} catch (error) {
			console.log('Error checking first render:', error)
		}
	}

	if (loading) return null

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStyle: {
					elevation: 0,
				},
				// headerLeft: () => <BackButton />,
			}}
		>
			{value && (
				<>
					<Stack.Screen name="Welcome" component={WelcomeScreen} />
					<Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
				</>
			)}
			<Stack.Screen name="AuthHomePage" component={AuthHomeScreen} />
			<Stack.Screen
				name="Login"
				options={{
					headerTitle: '',
					headerShown: true,
				}}
				component={LoginScreen}
			/>
			<Stack.Screen
				name="Signup"
				options={{
					headerTitle: '',
					headerShown: true,
				}}
				component={SignUpScreen}
			/>
			<Stack.Screen
				name="OTP"
				options={{
					headerTitle: '',
					headerShown: true,
				}}
				component={OtpScreen}
			/>
		</Stack.Navigator>
	)
}

export default WalkthroughNavigator
