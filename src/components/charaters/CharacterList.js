import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Col, Row} from 'react-grid-system'
import CharacterListItem from './CharacterListItem'

const CharacterList = () => {
	const {data: charactersData} = useSelector(state => state.characters)
	return (
		<Container>
			<Row>
				{charactersData.map(character => (
					<Col xs={12} md={6} lg={4} key={character.slug}>
						<CharacterListItem character={character} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default CharacterList
