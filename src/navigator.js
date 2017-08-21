import {
  StackNavigator,
} from 'react-navigation';
import Welcome from './containers/welcome'
import CreateTeam from './containers/createTeam'
import ConfirmTeam from './containers/confirmTeam'
import CreateTeamName from './containers/createTeamName'
export default StackNavigator({
  Welcome: { screen: Welcome },
  CreateTeam: { screen: CreateTeam },
  ConfirmTeam: {screen: ConfirmTeam},
  CreateTeamName: {screen: CreateTeamName}
}, {
	headerMode: 'none'
})