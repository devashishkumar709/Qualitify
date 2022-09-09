import React ,{Component} from 'react';
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
  import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
  import QRCodeScanner from 'react-native-qrcode-scanner';
  import { RNCamera } from 'react-native-camera';

class Scanner extends Component{
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
    render(){
        return(
            <SafeAreaView style={{backgroundColor: 'black', flex:1}}>
                <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });

export default Scanner;
// AppRegistry.registerComponent('default', () => ScanScreen);