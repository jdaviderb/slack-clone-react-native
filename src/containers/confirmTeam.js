import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { TextField } from 'react-native-material-textfield';
import Button from 'apsl-react-native-button'
import { connect } from 'react-redux'
import SecurityCode from '../components/securityCode'
import {updateFormTeam} from '../actions/team'
import { goTo } from '../actions/navigator'
import LoadingBar from '../components/loadingBar'

class ConfirmTeam extends Component {
  render() {
    const {team, updateForm, goCreateTeamName} = this.props
    return (
      <LoadingBar background="#3B87C1" backgroundValue="#FFFFFF" value={30}>
        <View style={styles.container}>
        	<View style={styles.content}>
            <SecurityCode 
              value={team.form.security}
              onChangeValue={ (digit) => updateForm('security', digit) }
            />
            <Text style={styles.description}> 
              We-ve sent six-digit confirmation code to 
              {' '} {team.form.email}. Enter it here to confirm your
              email address
            </Text>
          </View>
          <View style={styles.options}>
            <Button 
              style={styles.button}
              textStyle={styles.buttonText}
            >
              Resend code
            </Button>
            <Button 
              disabled={true}
              onPress={goCreateTeamName}
              style={[styles.button, styles.nextButton]}
              isDisabled={team.form.security.length !== 6}
              textStyle={[styles.buttonText, {color: '#419FDD'}]}
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
    alignItems: 'center'
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
  goCreateTeamName: () => dispatch(goTo('CreateTeamName'))
})

export default connect(mapStateToProp,mapDispatchToProp)(ConfirmTeam)
