import {createStore, combineReducers, applyMiddleware} from 'redux'
import welcome from './reducers/welcome'
import navigator from './reducers/navigator'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	welcome,
	navigator
})

export default createStore(reducers, applyMiddleware(thunk))