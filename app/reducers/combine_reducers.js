let combineReducers = require('redux').combineReducers;
let dataReducer = require('./data_reducer');
let userInterfaceReducer = require('./user_interface_reducer');

module.exports = combineReducers({
  dataReducer,
  userInterfaceReducer
});

