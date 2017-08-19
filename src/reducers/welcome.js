import Logo from '../../assets/logo.png'
const initialState =  [
	{
		title: 'Welcome to slack',
		description: `All your team communication in one
		place, instantly searchable.`,
		photo: Logo,
		photoBackgroundColor: '#3DBA90'
	},
	{
		title: 'Channels',
		description: `talk with coworkers based on projects, \n departaments or shared interests.
		`,
		photo: Logo,
		photoBackgroundColor: 'pink'
	},
	{
		title: 'Direct Messages',
		description: `Talk one-on with people in your, \n company.
		`,
		photo: Logo,
		photoBackgroundColor: '#E27F00'
	}
]

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}