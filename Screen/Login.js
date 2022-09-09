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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }

  handleemail = text => {
    this.setState({email: text});
  };

  handlepass = text => {
    this.setState({pass: text});
  };


  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={{flex: 1}} source={require('../image/l&sbg.jpg')}>
        <View style={{flex: 1, marginTop: '10%'}}>
          <View
            style={{
              flex: 0.08,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 33,
                fontFamily: 'Iowan Old Style',
                color: 'white',
                alignSelf: 'center',
              }}>
              Log-In
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 0.92}}>
            <View
              style={{
                // backgroundColor: 'red',
                flex: 1,
              }}>
              <TextInput
                onChangeText={txt => this.handleemail(txt)}
                id="email"
                keyboardType="email-address"
                style={{
                  borderWidth: 2,
                  height: 50,
                  alignSelf: 'center',
                  width: 300,
                  fontSize: 20,
                  marginTop: 150,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
                placeholder="Enter your Email address"
                placeholderTextColor="white"></TextInput>
            </View>
            <View
              style={{
                // backgroundColor: 'pink',
                flex: 0.1,
                marginTop: 20,
                justifyContent: 'center',
              }}>
              <TextInput
                onChangeText={txt => this.handlepass(txt)}
                id="pass"
                placeholder="Enter Password"
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor="white"
                automaticallyAdjustContentInsets={true}
                style={{
                  borderWidth: 2,
                  height: 50,
                  alignSelf: 'center',
                  width: 300,
                  fontSize: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: 'white',
                  color: 'white',
                }}
              />
              <TouchableOpacity
                // onPress={() => Auth.signin(this.state.email, this.state.pass)}
                style={{
                  height: 40,
                  width: 150,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginTop: 40,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text style={{textAlign: 'center', fontSize: 20}}>LOG-IN</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              // onPress={()=> navigation.navigate("Main")}}
              style={{
                height: 40,
                width: 280,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../image/google.png')}
                style={{height: 20, width: 20, marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'Iowan Old Style',
                  marginLeft: 10,
                }}>
                Login with Google+
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            //   onPress={() => navigation.navigate('Signup')}
              style={{
                marginTop: 30,
                height: 40,
                justifyContent: 'center',
                marginHorizontal: 20,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'Iowan Old Style',
                  textDecorationLine: 'underline',
                }}>
                Don't have an account? Sign-IN!!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
