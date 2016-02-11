let types = require('./../constants/actions_types');

const initialState = [{
  loaded: false,
  showMovieInfo: false,
  showFilter: false,
  showPicture: false
}];

module.exports = function userInterface(state, action) {
  let previousState = (state ? state : initialState);

  switch(action.type) {


    default:
      return previousState;
  }
};
