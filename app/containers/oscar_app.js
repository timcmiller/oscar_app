import React, {
  Component,
  View,
  Text,
  Image,
  TextInput
} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInterfaceActions from '../actions/user_interface_actions';
import * as dataActions from '../actions/data_actions';

import MainView from '../components/main_view';

class OscarApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainView
      {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userInterfaceReducer,
    ...state.dataReducer
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ...userInterfaceActions, ...dataActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OscarApp);
