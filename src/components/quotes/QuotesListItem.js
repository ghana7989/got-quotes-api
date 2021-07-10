import {Blockquote, Group, useMantineTheme} from '@mantine/core'
import React from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {addFavorite, removeFavorite} from '../../redux/favouritesSlice'

const QuotesListItem = ({quote: quoteObject}) => {
	const {id, quote} = quoteObject
	const theme = useMantineTheme()
	const favouritesArray = useSelector(state => state.favourites)

	const dispatch = useDispatch()
	function isFav() {
		return favouritesArray?.find(item => item.id === id)
	}
	const handleAddToFavourite = React.useCallback(() => {
		dispatch(addFavorite({id, quote}))
	}, [id, quote, dispatch])
	const handleRemoveFavourite = React.useCallback(() => {
		dispatch(removeFavorite({id}))
	}, [id, dispatch])
	return (
		<Group direction='column'>
			<Blockquote
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
			{!isFav() ? (
				<AiOutlineHeart
					onClick={handleAddToFavourite}
					size={30}
					color={theme.colors.gold}
					style={{
						cursor: 'pointer',
						alignSelf: 'center',
					}}
				/>
			) : (
				<AiFillHeart
					onClick={handleRemoveFavourite}
					size={30}
					color={theme.colors.gold}
					style={{
						alignSelf: 'center',
						cursor: 'pointer',
					}}
				/>
			)}
		</Group>
	)
}

export default QuotesListItem
