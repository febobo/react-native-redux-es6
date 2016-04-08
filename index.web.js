/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   View,
//   Platform,
// } from 'react-native';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Platform
} from 'react-native';

import demo from './app/containers/app';

AppRegistry.registerComponent('demo', () => demo);

AppRegistry.registerComponent('demo', () => demo);
if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('demo', {
    rootTag: app
  });
}
