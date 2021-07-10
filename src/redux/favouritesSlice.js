import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from 'nanoid'

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: [],
	reducers: {
		addFavorite: (state, action) => {
			const favourite = {
				id: nanoid(),
				quote: action.payload,
			}
			state.push(favourite)
		},
	},
})

export const {addFavorite} = favouritesSlice.actions

export default favouritesSlice.reducer
