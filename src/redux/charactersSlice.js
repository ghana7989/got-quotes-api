import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getCharactersAsync = createAsyncThunk(
	'characters/getCharactersAsync',
	async () => {
		try {
			const {data} = await axios.get(
				'https://raw.githubusercontent.com/ghana7989/got-quotes-api/main/Details.json',
			)
			if (data?.details?.length) {
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
