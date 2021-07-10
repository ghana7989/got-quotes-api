import {useMantineTheme, Center, Loader} from '@mantine/core'
import {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-grid-system'
import {useDispatch, useSelector} from 'react-redux'
import CharacterList from './components/charaters/CharacterList'
import HomeSearch from './components/search'
import {getCharactersAsync} from './redux/charactersSlice'
import AppDivider from './components/AppDivider'
import RandomQuote from './components/RandomQuote'
import {useDebouncedValue} from '@mantine/hooks'
function App() {
	const dispatch = useDispatch()
	const {isLoading, data} = useSelector(state => state.characters)
	const [filteredArrayBySearchValue, setFilteredArrayBySearchValue] = useState(
		[],
	)
	const [searchValue, setSearchValue] = useState('')
	const [debouncedSearchValue] = useDebouncedValue(searchValue, 500)

	useEffect(() => {
		dispatch(getCharactersAsync())
	}, [dispatch])
	useEffect(() => {
		if (debouncedSearchValue) {
			const filteredSearchInputArr = data.filter(character => {
				return (
					character.name.includes(debouncedSearchValue) ||
					character.slug.includes(debouncedSearchValue) ||
					character?.house?.name.includes(debouncedSearchValue)
				)
			})
			setFilteredArrayBySearchValue(filteredSearchInputArr)
		}
	}, [debouncedSearchValue, data])
	const theme = useMantineTheme()

	if (isLoading) {
		return (
			<Center
				style={{
					width: '100vw',
					height: '100vh',
				}}
			>
				<Loader
					size={50}
					style={{
						fill: theme.colors.sand[0],
					}}
				/>
			</Center>
		)
	}
	return (
		<Container fluid>
			<Row>
				<Col>
					<Center
						style={{
							textAlign: 'center',
						}}
					>
						<h1 className='logo'>Quotes of thrones</h1>
					</Center>
				</Col>
			</Row>
			{/* Search Bar */}
			<Row>
				<Col>
					<HomeSearch
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<RandomQuote />
				</Col>
			</Row>
			{/* Divider */}
			<AppDivider text='Search Results' />
			{/* All Cards */}
			<Row>
				<Col>
					<CharacterList
						filteredArrayBySearchValue={filteredArrayBySearchValue}
						debouncedSearchValue={debouncedSearchValue}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default App
