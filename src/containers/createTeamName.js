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
class createTeamName extends Component {
  render() {
    const {team, updateForm, goToConfirmTeam} = this.props
    return (
      <View style={styles.container}>
      	<View style={styles.content}>
          <View style={{width: '100%'}}>
            <TextField
              autoCapitalize='none'
              tintColor="white"
              value={team.form.name}
              fontSize={16}
              baseColor="rgba(255,255,255,.6)"
              textColor={'white'}
              style={{width: '100%'}}
              label='Name your team slack'
              onChangeText={((name) => updateForm('name', name) )}
            />
          </View>
          <Text style={styles.description}> 
            We'll use this name your Slack team. You can{'\n'}
            always change it later {'\n'}
          </Text>
        </View>
        <View style={styles.options}>
          
          <Button 
            disabled={true}
            style={[styles.button, styles.nextButton]}
            isDisabled={team.form.name.length ===  0}
            textStyle={[styles.buttonText, {color: '#419FDD'}]}
            onPress={goToConfirmTeam}
          >
            Next
          </Button>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7C60C4',
    padding: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    minWidth: '50%',
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
    minHeight: '10%',
    justifyContent: 'flex-end'
  }
})


const mapStateToProp = ({team}) => ({
  team
}) 

const mapDispatchToProp = (dispatch) => ({
  updateForm: (key, value) => dispatch(updateFormTeam(key, value)),
  goToConfirmTeam: () => dispatch(goTo('ConfirmTeam'))
})

export default connect(mapStateToProp,mapDispatchToProp)(createTeamName)
