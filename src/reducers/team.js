import { isEmailValid } from '../utils/helpers'
const initialState = {
	form: {
		email: '',
		security: '12345',
		name: ''
	},
	validForm: false
}

export default (state = initialState, action)  => {
	switch (action.type) {
		case 'UPDATE_FORM_TEAM':
			state.form[action.payload.key] = action.payload.value
			state.validForm = isEmailValid(state.form.email)
			return {...state}
		default:
			return state
	}
}