import {configureStore} from '@reduxjs/toolkit'
import charactersReducer from './charactersSlice'
import favouritesReducer from './favouritesSlice'

export default configureStore({
	reducer: {
		characters: charactersReducer,
		favourites: favouritesReducer,
	},
})
