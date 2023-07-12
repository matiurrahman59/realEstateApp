import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// internal imports
import AppNavigator from './app.navigator'
import WalkthroughNavigator from './walkthrough.navigator'
import { loadUser } from '../store/userSlice'

export const Navigator = () => {
	const { loading, user } = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadUser())
	}, [])

	if (loading) return null

	return (
		<NavigationContainer>
			{user ? <AppNavigator /> : <WalkthroughNavigator />}
		</NavigationContainer>
	)
}
