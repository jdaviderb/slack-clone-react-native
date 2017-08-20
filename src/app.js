import React, {component} from 'react'
import Navigator from './containers/navigator'
import {Provider} from 'react-redux'
import store from './store'

const App =  () => (
		<Provider store={store}>
			<Navigator />
		</Provider>
)


export default App