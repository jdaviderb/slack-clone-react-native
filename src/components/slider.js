import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'
import Swiper from 'react-native-swiper'
import Logo from '../../assets/logo.png'
class Slider extends Component {
  render() {
  	const makeSlide = (data, index) => ( 
  		<View style={styles.slide} key={index}>
	  		<View style={[styles.photo, {backgroundColor: data.photoBackgroundColor}]}>
	  		<Image source={data.photo} style={{width: 200, height: 200}} />
	  		</View>
	  		<View style={styles.content}>
		  		<Text style={styles.textTitle}>{data.title}</Text>
		  		<Text style={styles.text}>{data.description}</Text>
	  		</View>
  		</View>
  	)
  	const dot = (
  		<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
  	)
  	const activeDot = (
			<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 7, height: 7, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
  	)
    return (
      	<Swiper dot={dot} activeDot={activeDot}>
      		{(this.props.slides || []).map(makeSlide)}
        </Swiper>
    )
  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 1
	},
	photo: {
		height: '60%',
	  alignItems: 'center',
	  justifyContent: 'center',
	  elevation: 2
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
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	options: {
	  flexDirection: 'row',
	  minHeight: '8%'
	},
	slide: {
	  flex: 1,
	  backgroundColor: '#FFFFFF',
	},
	textTitle: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  marginBottom: 2,
	  textAlign: 'center'
	},
	text: {
		textAlign: 'center'
	}
})


export default Slider