import Navigator from '../navigator'

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Welcome'));


export default (state = initialState, action) => {
	const nextState =  Navigator.router.getStateForAction(action, state)
	return nextState || state
}