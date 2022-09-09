/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Camera from './components/Camera'
import App from './router';
// import App from './Screen/Login'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
