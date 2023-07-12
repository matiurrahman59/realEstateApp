import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAsyncStorage = key => {
	const [value, setValue] = useState(null)

	const setValueAsync = async newValue => {
		try {
			await AsyncStorage.setItem(key, JSON.stringify(newValue))
			setValue(newValue)
		} catch (error) {
			console.error('Error setting value in AsyncStorage:', error)
		}
	}

	const getValueAsync = async () => {
		try {
			const storedValue = await AsyncStorage.getItem(key)
			setValue(JSON.parse(storedValue))
		} catch (error) {
			console.error('Error getting value from AsyncStorage:', error)
		}
	}

	const removeValueAsync = async () => {
		try {
			await AsyncStorage.removeItem(key)
			setValue(null)
		} catch (error) {
			console.error('Error removing value from AsyncStorage:', error)
		}
	}

	useEffect(() => {
		getValueAsync() // Load the value from AsyncStorage on component mount
	}, [])

	return [value, setValueAsync, removeValueAsync]
}

export default useAsyncStorage
