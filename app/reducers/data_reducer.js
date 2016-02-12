let React = require('react-native');
let {
  ListView,
} = React;

let types = require('./../constants/action_types');

const initialState = {
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  movieData: []
};

module.exports = function data(state, action) {
  let previousState = (state ? state : initialState);

  switch(action.type) {

    default:
      return previousState;
  }
};
