import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { TextField } from 'react-native-material-textfield';

class securityCode extends Component {
	

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	digits: (this.props.value || '' ).split('')
	  };
	}

	onChangeValue (index, value) {
		const {digits} = this.state
		digits[index] = value
		this.setState({digits}, () => {
			if (this.props.onChangeValue) {
				console.log('change new value')
				this.props.onChangeValue(this.state.digits.join(''))
			}
		})
		
	}

  render () {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[0]}
           	onChangeText={(value) => this.onChangeValue(0, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[1]}
            onChangeText={(value) => this.onChangeValue(1, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[2]}
           	onChangeText={(value) => this.onChangeValue(2, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
        <Text style={{color: 'white', alignSelf: 'flex-end', bottom: 5, margin: 10, fontSize: 26}}>-</Text>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[3]}
           	onChangeText={(value) => this.onChangeValue(3, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[4]}
           	onChangeText={(value) => this.onChangeValue(4, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
        <View style={{minWidth: '10%', margin: 10}}>
          <TextField
            autoCapitalize='none'
            keyboardType="numeric"
            tintColor="white"
            value={this.state.digits[5]}
           	onChangeText={(value) => this.onChangeValue(5, value)}
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,.5)"
            fontSize={16}
            maxLength={1}
            returnKeyType="next"
            baseColor="white"
            textColor={'white'}
            style={{width: '100%', textAlign: 'center'}}
            label=''
            
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})


export default securityCode