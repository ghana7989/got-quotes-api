import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Col, Row} from 'react-grid-system'
import QuotesListItem from './QuotesListItem'
import {Group, Paper, useMantineTheme} from '@mantine/core'
const QuotesList = ({quotes, name}) => {
	const theme = useMantineTheme()
	return (
		<Group direction='column' position='center'>
			<h1>{name}</h1>
			{quotes.map(quote => (
				<Paper
					padding='lg'
					shadow='xs'
					radius='lg'
					style={{
						backgroundColor: theme.colors.ebony,
					}}
				>
					<QuotesListItem quote={quote} />
				</Paper>
			))}
		</Group>
	)
}

export default QuotesList
