import {
  StackNavigator,
} from 'react-navigation';
import Welcome from './containers/welcome'

export default StackNavigator({
  Home: { screen: Welcome },
}, {
	headerMode: 'none'
})