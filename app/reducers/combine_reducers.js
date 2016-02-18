import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import userInterfaceReducer from './user_interface_reducer';


const rootReducer = combineReducers({
  userInterfaceReducer,
  dataReducer
});

export default rootReducer;
