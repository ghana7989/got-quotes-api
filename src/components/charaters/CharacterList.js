import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Col, Row} from 'react-grid-system'
import CharacterListItem from './CharacterListItem'

const CharacterList = ({filteredArrayBySearchValue, debouncedSearchValue}) => {
	let {data: charactersData} = useSelector(state => state.characters)
	let dataArr
	if (filteredArrayBySearchValue.length > 0 && debouncedSearchValue) {
		dataArr = filteredArrayBySearchValue
	} else {
		dataArr = charactersData
	}

	return (
		<Container>
			<Row>
				{dataArr.map(character => (
					<Col xs={12} md={6} lg={4} key={character.slug}>
						<CharacterListItem character={character} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default CharacterList
