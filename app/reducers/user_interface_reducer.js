import * as types from './../constants/action_types';

const initialState = {
  loaded: false
};

export default function userInterface(state = initialState, action) {

  switch(action.type) {

    case 'IS_LOADED':
        return {
            ...state,
            loaded: true
        };

    default:
      return previousState;
  }
}
