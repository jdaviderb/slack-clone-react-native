import {
  StackNavigator,
} from 'react-navigation';
import Welcome from './containers/welcome'
import CreateTeam from './containers/createTeam'

export default StackNavigator({
  Welcome: { screen: Welcome },
  CreateTeam: { screen: CreateTeam },
}, {
	headerMode: 'none'
})