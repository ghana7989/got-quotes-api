import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getRandomQuoteAsync = createAsyncThunk(
	'quote/getRandomQuoteAsync',
	async function () {
		const {data: fetchedData} = await axios.get(
			'https://game-of-thrones-quotes.herokuapp.com/v1/random',
		)
		return fetchedData
	},
)

export const quoteSlice = createSlice({
	name: 'quote',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getRandomQuoteAsync.fulfilled]: (_, action) => {
			return action.payload
		},
	},
})

export default quoteSlice.reducer
