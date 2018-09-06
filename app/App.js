import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/index';
import FullscreenView from "./containers/fullscreenView";
import ImageList from "./containers/Image-list";

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
);


    console.log(store.getState());


const RootStack = createStackNavigator({
        Home: ImageList,
        fullscreen: FullscreenView
    },
    {
        initialRouteName: 'Home',
    });

export default class App extends Component {

  render() {

    return (
        <Provider store={store}>
            <RootStack/>
        </Provider>
    );
  }
}


