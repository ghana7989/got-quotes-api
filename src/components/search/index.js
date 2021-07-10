import {Kbd, TextInput} from '@mantine/core'
import {useRef, useState} from 'react'
import {useHotkeys} from 'react-hotkeys-hook'
import {MagnifyingGlassIcon} from '@modulz/radix-icons'

export const searchBarRightSection = (
	<div style={{display: 'flex', alignItems: 'center'}}>
		<Kbd>Ctrl</Kbd>
		<span style={{margin: '0 5px'}}>+</span>
		<Kbd>/</Kbd>
	</div>
)

const Search = () => {
	const searchRef = useRef()
	// Hot key for immediate search
	useHotkeys('ctrl+/', () => {
		searchRef.current.focus()
	})

	const [searchValue, setSearchValue] = useState('')

	function handleSearchOnChange(e) {
		setSearchValue(e.target.value)
	}

	return (
		<TextInput
			elementRef={searchRef}
			placeholder='Search'
			icon={<MagnifyingGlassIcon />}
			rightSectionWidth={90}
			rightSection={searchBarRightSection}
			styles={{rightSection: {pointerEvents: 'none'}}}
			value={searchValue}
			onChange={handleSearchOnChange}
		/>
	)
}

export default Search
