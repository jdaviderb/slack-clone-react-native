import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import Button from 'apsl-react-native-button'
import Slider from '../components/slider'
import Logo from '../../assets/logo.png'

class Welcome extends Component {
  state = {
    slides: [
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
  }
  render() {
    return (
     <View style={styles.wrapper} >
          <Slider
            slides={this.state.slides}
           />
        <View style={styles.options}>
          <Button
            style={[styles.button, {borderRightWidth: 1, borderColor: '#104468'}]}
            textStyle={styles.buttonText}
          >
            SIGN IN
          </Button>

          <Button
            style={styles.button}
            textStyle={styles.buttonText}
          >
            CREATE TEAM
          </Button>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  button: {
    flex: 1,
    height: '100%', 
    borderWidth: 0, 
    backgroundColor: '#2C9BF4', 
    borderRadius: 0, 
    margin: 0, 
    padding: 0
  },
  buttonText: {
    fontSize: 14,
    color: 'white'
  },
  options: {
    flexDirection: 'row',
    minHeight: '8%'
  }
})


export default Welcome