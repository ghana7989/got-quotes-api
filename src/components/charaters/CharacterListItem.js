import {
	Card,
	Overlay,
	Badge,
	useMantineTheme,
	Group,
	Modal,
	Image,
} from '@mantine/core'
import {useToggle} from '@mantine/hooks'
import React from 'react'
import QuotesList from '../quotes/QuotesList'

const CharacterListItem = ({character}) => {
	const theme = useMantineTheme()
	const {house, imageFull, name, slug, quotes} = character
	const [isModalOpen, toggleModalOpen] = useToggle(false, [false, true])
	const handleCardOnClick = e => {
		toggleModalOpen()
	}
	return (
		<>
			<Card
				onClick={handleCardOnClick}
				shadow='lg'
				style={{
					backgroundColor: theme.colors.ebony,
					cursor: 'pointer',
					borderRadius: 10,
					margin: 10,
				}}
			>
				<Image src={imageFull} height={350} />
				<Group position='center' direction='column' style={{marginBottom: 5}}>
					<h1>{name}</h1>
					<Badge
						variant='outline'
						style={{
							border: theme.colors.ebony,
						}}
					>
						{house ? house.name : 'No House'}
					</Badge>
				</Group>
			</Card>
			<Modal
				size='75%'
				styles={{
					inner: {
						alignItems: 'center',
						backgroundColor: theme.colors.ebony,
					},
					modal: {
						backgroundColor: theme.colors.sand,
					},
				}}
				opened={isModalOpen}
				onClose={() => toggleModalOpen()}
			>
				<QuotesList quotes={quotes} name={name} />
			</Modal>
		</>
	)
}

export default CharacterListItem
