import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TextStyle,
  View,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: '',
      repass: '',
      age: 0,
    };
  }
  handlename = text => {
    this.setState({name: text});
  };
  handleemail = text => {
    this.setState({email: text});
  };
  handlepass = text => {
    this.setState({pass: text});
  };
  handlerepass = text => {
    this.setState({repass: text});
  };
  handleage = text => {
    this.setState({age: text});
  };

  onSignUp() {
    if (
      this.state.name != '' &&
      this.state.email != '' &&
      this.state.pass != '' &&
      this.state.repass != '' &&
      this.state.age > 0
    ) {
      if (this.state.pass == this.state.repass) {
        if (this.state.age > 0) {
          Auth.signup(
            this.state.name,
            this.state.email,
            this.state.pass,
            this.state.age,
          );
        } else {
          alert('False age');
        }
      } else {
        alert("Password and Re-password doesn't match");
        console.log(this.state.pass);
        console.log(this.state.repass);
      }
    } else {
      alert('Enter all details');
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={{flex: 1, padding:15}} source={require('../image/l&sbg.jpg')}>
        <View style={{flex: 1, marginTop: '10%'}}>
          <View
            style={{
              flex: 0.08,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 34,
                fontFamily: 'Iowan Old Style',
                alignSelf: 'center',
              }}>
              Sign-Up
            </Text>
          </View>
          <View
            style={{
              flex: 0.92,
              // backgroundColor: 'red',
              justifyContent: 'center',
            }}>
            <View style={{flex: 1}}>
              <TextInput
                onChangeText={txt => this.handlename(txt)}
                id="name"
                keyboardType="default"
                style={{
                  borderWidth: 2,
                  height: 50,
                  width: '95%',
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="Full Name"
                placeholderTextColor="white"
              />

              <TextInput
                onChangeText={txt => this.handleemail(txt)}
                id="email"
                keyboardType="email-address"
                style={{
                  borderWidth: 2,
                  height: 50,
                  width: '95%',
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="Email Address"
                placeholderTextColor="white"
              />
              <TextInput
                onChangeText={txt => this.handlepass(txt)}
                id="pass"
                keyboardType="default"
                secureTextEntry={true}
                style={{
                  borderWidth: 2,
                  height: 50,
                  width: '95%',
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="Password"
                placeholderTextColor="white"
              />
              <TextInput
                onChangeText={txt => this.handlerepass(txt)}
                id="repass"
                keyboardType="default"
                secureTextEntry={true}
                style={{
                  borderWidth: 2,
                  height: 50,
                  width: '95%',
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="Re-password"
                placeholderTextColor="white"
              />
              <TextInput
                onChangeText={this.handleage}
                id="age"
                keyboardType="number-pad"
                style={{
                  borderWidth: 2,
                  height: 50,
                  width: '95%',
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="AGE"
                placeholderTextColor="white"
              />
              <TouchableOpacity
                onPress={() => this.onSignUp()}
                style={{
                  height: 40,
                  width: 150,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginTop: 40,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: 'Iowan Old Style',
                  }}>
                  SIGN-UP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    textAlign: 'center',
                    textDecorationLine: 'underline',
                  }}>
                  Already have account? Log-In!!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Signup;
