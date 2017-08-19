import {
  StackNavigator,
} from 'react-navigation';
import Home from './containers/home'

export default StackNavigator({
  Home: { screen: Home },
}, {
	headerMode: 'none'
})