import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import { store } from './store/store'
import { RootCmp } from './RootCmp'

import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		{/* <ChakraProvider> */}

		<Router>
			<RootCmp />
		</Router>
		{/* </ChakraProvider> */}
	</Provider>
)
