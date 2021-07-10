import {Card, Image} from '@mantine/core'
import React from 'react'

const CharacterListItem = ({character}) => {
	console.log('character: ', character)
	const {house, imageSmall, imageFull, name, slug, quotes} = character
	return (
		<Card shadow='lg'>
			<Image src={imageFull} height={350} />
		</Card>
	)
}

export default CharacterListItem
