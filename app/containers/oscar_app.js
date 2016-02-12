import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInterfaceActions from '../actions/user_interface_actions';
import * as dataActions from '../actions/data_actions';

let MainView = require('../components/main_view');

class OscarApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, UI, dispatch } = this.props
    return (
      <MainView
      data={data}
      UI={UI}
      {...bindActionCreators(userInterfaceActions, dispatch)} />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer,
    UI: state.userInterfaceReducer
  };
}

module.exports = connect(
  mapStateToProps
)(OscarApp);
