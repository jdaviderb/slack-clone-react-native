import { NavigationActions } from 'react-navigation'

export const goBack = () => (dispatch) => dispatch(NavigationActions.back())

export const goTo = (route) => (dispatch) => dispatch(NavigationActions.navigate({ routeName: route }))