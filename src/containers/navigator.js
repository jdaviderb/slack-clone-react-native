import React, {Component} from 'react'
import Navigator from '../navigator'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { goBack, doLogin } from '../actions/navigator'

class NavigatorWithRedux extends Component {

	componentDidMount () {
		BackHandler.addEventListener('hardwareBackPress', () => {
			this.props.dispatch(goBack())
			return true
		})

	}

	render () {
			return (
				<Navigator 
					navigation={addNavigationHelpers({
						dispatch: this.props.dispatch,
						state: this.props.navigator
					})}
				/>
			)
	}
}

const mapStateToProps = ({navigator}) => ({
	navigator
})
export default connect(mapStateToProps)(NavigatorWithRedux)
