import {MagnifyingGlassIcon} from '@modulz/radix-icons'
import {useMantineTheme, Divider} from '@mantine/core'
import React from 'react'

const AppDivider = ({text, Icon}) => {
	const theme = useMantineTheme()
	return (
		<Divider
			margins='lg'
			variant='solid'
			labelPosition='center'
			label={
				<>
					{Icon ? (
						Icon
					) : (
						<MagnifyingGlassIcon
							style={{width: 20, height: 20, color: theme.colors.sand}}
						/>
					)}
					<span style={{marginLeft: 5}}>{text}</span>
				</>
			}
		/>
	)
}

export default AppDivider
