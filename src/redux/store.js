import {configureStore} from '@reduxjs/toolkit'
import charactersReducer from './charactersSlice'
import favouritesReducer from './favouritesSlice'
import quoteReducer from './quoteSlice'

export default configureStore({
	reducer: {
		characters: charactersReducer,
		favourites: favouritesReducer,
		quote: quoteReducer,
	},
})
