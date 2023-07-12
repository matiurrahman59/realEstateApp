import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: [],
}

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action) {
			state.favorites.push(action.payload)
		},
		removeFromFavorites(state, action) {
			state.favorites = state.favorites.filter(
				item => item.id !== action.payload,
			)
		},
		removeAllFromFavorites(state) {
			state.favorites = []
		},
	},
})

export const { addToFavorites, removeFromFavorites, removeAllFromFavorites } =
	favoriteSlice.actions
export default favoriteSlice.reducer
