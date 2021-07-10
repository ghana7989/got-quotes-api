import React from 'react'
import {MantineProvider} from '@mantine/core'

function Theme({children}) {
	return (
		<MantineProvider
			theme={{
				colors: {
					ebony: ['#4A4957'],
					sand: ['#F1D8BF'],
					gold: ['#B18643'],
					apolloBlue: ['#788483'],
				},
			}}
		>
			{children}
		</MantineProvider>
	)
}

export default Theme
