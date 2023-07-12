import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		onLogout(state) {
			state.user = null
			state.isAuthenticated = false
		},
		setUser(state, action) {
			state.user = action.payload
			state.isAuthenticated = true
			state.loading = false
		},
		clearUser(state) {
			state.user = null
			state.isAuthenticated = false
			state.loading = false
		},
		setUserLoading(state) {
			state.loading = true
		},
	},
})

export const { setUser, clearUser, setUserLoading, onLogout } =
	userSlice.actions
export default userSlice.reducer

export const setUserData = data => async dispatch => {
	try {
		await AsyncStorage.setItem('@user', JSON.stringify(data))
		dispatch(setUser(data))
	} catch (e) {
		console.log('Error storing user', e)
	}
}

// when app first initializes
export const loadUser = () => async dispatch => {
	dispatch(setUserLoading())
	try {
		const jsonValue = await AsyncStorage.getItem('@user')
		if (jsonValue) {
			dispatch(setUser(JSON.parse(jsonValue)))
		} else {
			dispatch(clearUser())
		}
	} catch (e) {
		console.log('Error loading user', e)
	}
}

export const logOutUser = () => async dispatch => {
	try {
		// await AsyncStorage.removeItem('@user')
		dispatch(onLogout())
		console.log('User data cleared successfully')
	} catch (e) {
		console.log('Error clearing user', e)
	}
}
