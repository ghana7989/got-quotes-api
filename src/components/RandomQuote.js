import React, {useEffect} from 'react'
import {useMantineTheme, Blockquote} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {getRandomQuoteAsync} from '../redux/quoteSlice'

const RandomQuote = () => {
	const quote = useSelector(state => state.quote)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRandomQuoteAsync())
	}, [dispatch])
	const theme = useMantineTheme()
	if (!quote) return <></>
	return (
		<Blockquote
			cite={`- ${quote?.character?.name}`}
			styles={{
				root: {
					backgroundColor: theme.colors.sand,
					borderLeftColor: theme.colors.gold,
				},
				icon: {
					color: theme.colors.gold,
				},
			}}
		>
			<h3>{quote.sentence}</h3>
		</Blockquote>
	)
}

export default RandomQuote
