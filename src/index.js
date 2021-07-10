import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import Theme from './theme'
import {NormalizeCSS} from '@mantine/core'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
	<Theme>
		<NormalizeCSS />
		<Provider store={store}>
			<App />
		</Provider>
	</Theme>,
	document.getElementById('root'),
)
