import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import Button from 'apsl-react-native-button'
import Slider from '../components/slider'
import { connect } from 'react-redux'

const welcome =  ({slides}) => (
  <View style={styles.wrapper} >
       <Slider
         slides={slides}
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


const mapStateToProps  = ({welcome}) => ({
  slides: welcome
})

export default connect(mapStateToProps)(welcome)