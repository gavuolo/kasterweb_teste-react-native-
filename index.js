/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import App from './src/navigation/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
