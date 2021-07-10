import {Blockquote, Group, useMantineTheme} from '@mantine/core'
import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'

const QuotesListItem = ({quote}) => {
	const theme = useMantineTheme()
	return (
		<Group>
			<Blockquote
				style={{
					maxWidth: '95%',
				}}
				styles={{
					root: {
						backgroundColor: theme.colors.sand,
						borderLeftColor: theme.colors.apolloBlue,
					},
					icon: {
						color: theme.colors.apolloBlue,
					},
				}}
			>
				<h3>{quote}</h3>
			</Blockquote>
			<AiOutlineHeart
				size={30}
				color={theme.colors.gold}
				style={{
					cursor: 'pointer',
				}}
			/>
		</Group>
	)
}

export default QuotesListItem
