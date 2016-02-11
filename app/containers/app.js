import React, { Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let rootReducer = require('../reducers/combine_reducers');
let OscarApp = require('./oscar_app');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

module.exports = class App extends Componet {
  render() {
    return (
      <Provider store={store}>
        <OscarApp />
      </Provider>
    );
  }
}
