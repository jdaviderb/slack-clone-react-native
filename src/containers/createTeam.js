import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { TextField } from 'react-native-material-textfield';
import Button from 'apsl-react-native-button'
import { connect } from 'react-redux'
import { updateFormTeam } from '../actions/team'
import { goTo } from '../actions/navigator'
import LoadingBar from '../components/loadingBar'
class createTeam extends Component {
  render() {
    const {team, updateForm, goToConfirmTeam} = this.props
    return (
      <LoadingBar background="#3B87C1" backgroundValue="#FFFFFF" value={10}>
        <View style={styles.container}>
        	<View style={styles.content}>
            <View style={{width: '100%'}}>
              <TextField
                autoCapitalize='none'
                keyboardType="email-address"
                tintColor="white"
                value={team.form.email}
                fontSize={16}
                baseColor="white"
                textColor={'white'}
                style={{width: '100%'}}
                label='Email address'
                onChangeText={((email) => updateForm('email', email) )}
              />
            </View>
            <Text style={styles.description}> 
              We suggest using your work email if you're creating{'\n'}
              for your business, departament, or project {'\n'}
            </Text>
          </View>
          <View style={styles.options}>
            <Button 
              style={styles.button}
              textStyle={styles.buttonText}
            >
              Google accounts
            </Button>
            <Button 
              disabled={true}
              style={[styles.button, styles.nextButton]}
              isDisabled={!team.validForm}
              textStyle={[styles.buttonText, {color: '#419FDD'}]}
              onPress={goToConfirmTeam}
            >
              Next
            </Button>
          </View>
        </View>
      </LoadingBar>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#419FDD',
    padding: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    margin: 3,
    borderColor: 'rgba(255,255,255, 0.6)'
  },
  nextButton: {
    backgroundColor: 'white'
  },
  buttonText: {
    color: 'white'
  },
  description: {
    color: 'white',
    textAlign: 'left',
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    minHeight: '10%'
  }
})


const mapStateToProp = ({team}) => ({
  team
}) 

const mapDispatchToProp = (dispatch) => ({
  updateForm: (key, value) => dispatch(updateFormTeam(key, value)),
  goToConfirmTeam: () => dispatch(goTo('ConfirmTeam'))
})

export default connect(mapStateToProp,mapDispatchToProp)(createTeam)
