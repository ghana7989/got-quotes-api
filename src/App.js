import {useMantineTheme, Center, Loader} from '@mantine/core'

import {useEffect} from 'react'
import {Container, Row, Col} from 'react-grid-system'
import {useDispatch, useSelector} from 'react-redux'
import CharacterList from './components/charaters/CharacterList'
import Search from './components/search'
import {getCharactersAsync} from './redux/charactersSlice'

function App() {
	const dispatch = useDispatch()
	const {isLoading} = useSelector(state => state.characters)

	useEffect(() => {
		dispatch(getCharactersAsync())
	}, [])
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
		<Container>
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
					<Search />
				</Col>
			</Row>
			{/* All Cards */}
			<Row>
				<Col>
					<CharacterList />
				</Col>
			</Row>
		</Container>
	)
}

export default App
