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
    const { actions } = this.props
    return (
      <MainView
      {...this.props}
      actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.userInterfaceActions
  };
}

export default connect(state => ({
  state:  userInterfaceActions
  }),
  (dispatch) => ({
    actions: bindActionCreators(userInterfaceActions, dispatch)
  })
)(OscarApp);
