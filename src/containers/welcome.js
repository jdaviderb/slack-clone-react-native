import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../styles/welcome'
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

const mapStateToProps  = ({welcome}) => ({
  slides: welcome
})

export default connect(mapStateToProps)(welcome)