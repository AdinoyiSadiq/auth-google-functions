import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = ''

class SignInForm extends Component {
  state = { phone: '', code: '' }

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch {
      console.log(err);
    }
    
  }
  
  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Input 
            label="Enter Phone Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View> 
        <View style={{ marginBottom: 20 }}>
          <Input 
            label="Enter Code"
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View> 
        <Button
          onPress={this.handleSubmit} 
          title="Submit" 
        />
      </View>
    );
  }
}

export default SignInForm;