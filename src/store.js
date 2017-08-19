import {createStore, combineReducers} from 'redux'
import welcome from './reducers/welcome'

export default createStore(combineReducers({
	welcome
}))