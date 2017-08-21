import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import welcome from './reducers/welcome'
import navigator from './reducers/navigator'
import team from './reducers/team'

const reducers = combineReducers({
	welcome,
	navigator,
	team
})

export default createStore(reducers, applyMiddleware(thunk))