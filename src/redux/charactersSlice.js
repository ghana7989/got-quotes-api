import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getCharactersAsync = createAsyncThunk(
	'characters/getCharactersAsync',
	async () => {
		if (window.localStorage.getItem('characters')) {
			return JSON.parse(window.localStorage.getItem('characters'))
		}
		try {
			const {data} = await axios.get(
				'https://raw.githubusercontent.com/ghana7989/got-quotes-api/main/Details.json',
			)
			if (data?.details?.length) {
				window.localStorage.setItem('characters', JSON.stringify(data.details))
				return data.details
			}
		} catch (e) {
			return e.response.message
		}
	},
)

export const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		isLoading: false,
		error: null,
		data: [],
	},
	reducers: {},
	extraReducers: {
		[getCharactersAsync.pending]: (state, _) => {
			return {
				...state,
				isLoading: true,
			}
		},
		[getCharactersAsync.fulfilled]: (state, action) => {
			return {
				...state,
				isLoading: false,
				data: action.payload,
			}
		},
		[getCharactersAsync.rejected]: (state, action) => {
			return {
				...state,
				isLoading: false,
				data: [],
				error: action.payload,
			}
		},
	},
})

export default charactersSlice.reducer
