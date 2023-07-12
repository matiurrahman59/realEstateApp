import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from './favoriteSlice'
import userReducer from './userSlice'

const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		user: userReducer,
	},
})

export default store
