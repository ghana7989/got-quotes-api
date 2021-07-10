import {createSlice} from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: JSON.parse(window.localStorage.getItem('favourites')) || [],
	reducers: {
		addFavorite: (state, action) => {
			const favourite = {
				id: action.payload.id,
				quote: action.payload.quote,
			}
			state.push(favourite)
			window.localStorage.setItem('favourites', JSON.stringify(state))
		},
		removeFavorite: (state, action) => {
			const filteredState = state.filter(
				favourite => favourite.id !== action.payload.id,
			)
			window.localStorage.setItem('favourites', JSON.stringify(filteredState))

			return filteredState
		},
	},
})

export const {addFavorite, removeFavorite} = favouritesSlice.actions

export default favouritesSlice.reducer
