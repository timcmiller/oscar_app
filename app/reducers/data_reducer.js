import React,
{
  ListView,
} from 'react-native';
import * as types from './../constants/action_types';

const initialState = {
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  movieData: []
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'UPDATE_MOVIE_STORE':
      return {
        ...state,
        dataSource: action.dataSource,
        movieData: action.movieData
      }

    default:
      return state;
  }
};
