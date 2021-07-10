import React from 'react'
import QuotesListItem from './QuotesListItem'
import {Group, Paper, useMantineTheme} from '@mantine/core'
const QuotesList = ({quotes, name}) => {
	const theme = useMantineTheme()
	return (
		<Group
			direction='column'
			position='center'
			style={{
				position: 'absolute',
			}}
		>
			<Group
				style={{
					position: 'sticky',
					top: 100,
					zIndex: -5,
					wordWrap: 'break-word',
				}}
			>
				<h1
					style={{
						fontSize: '20rem',
					}}
				>
					{name}
				</h1>
			</Group>
			{quotes.map(quote => (
				<Paper
					padding='lg'
					shadow='xs'
					radius='lg'
					style={{
						backgroundColor: theme.colors.ebony,
					}}
					key={quote.id}
				>
					<QuotesListItem quote={quote} />
				</Paper>
			))}
		</Group>
	)
}

export default QuotesList
