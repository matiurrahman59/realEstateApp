import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'

import AuthHomeScreen from '../features/authentication/screen/authhome.screen'
import LoginScreen from '../features/authentication/screen/login.screen'
import OtpScreen from '../features/authentication/screen/otp.screen'
import SignUpScreen from '../features/authentication/screen/signup.screen'
import WalkthroughScreen from '../features/onboarding/screen/walkthrough.screen'
import WelcomeScreen from '../features/onboarding/screen/welcome.screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

const WalkthroughNavigator = () => {
	const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)

	useEffect(() => {
		const checkFirstRender = async () => {
			const appData = await AsyncStorage.getItem('isAppFirstLaunched')
			if (appData == null) {
				setIsAppFirstLaunched(true)
				AsyncStorage.setItem('isAppFirstLaunched', 'false')
			} else {
				setIsAppFirstLaunched(false)
			}
		}

		checkFirstRender()
	}, [])

	return (
		isAppFirstLaunched != null && (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					headerStyle: {
						elevation: 0,
					},
				}}
			>
				{isAppFirstLaunched && (
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
	)
}

export default WalkthroughNavigator
