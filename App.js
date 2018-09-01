/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import ImageList from "./Image-list";
import FullscreenView from "./fullscreenView";

const RootStack = createStackNavigator({
        Home: ImageList,
        fullScreen: FullscreenView
    },
    {
        initialRouteName: 'Home',
    });

export default class App extends Component {

  render() {

    return (
            <RootStack/>
    );
  }
}


