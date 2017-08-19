import React, {component} from 'react'
import Router from './router'
import {Provider} from 'react-redux'
import store from './store'
export default () => (
		<Provider store={store}>
			<Router />
		</Provider>
)