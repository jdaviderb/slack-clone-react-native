import React, { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

class LoadingBar extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.background || 'transparent'}]}>
      	<View style={[styles.loader, {backgroundColor: this.props.backgroundValue || 'white', width: `${this.props.value || 0}%`}]}></View>
      	{this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loader: {
		width: '100%',
		height: 5,
	}
})


export default LoadingBar