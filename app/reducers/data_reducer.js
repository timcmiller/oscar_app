import React,
{
  ListView,
} from 'react-native';
import * as types from './../constants/action_types';

const initialState = {
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  movieData: [],
  currentMovie: [],
  isFetching: true
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'REQUEST_MOVIES':
      return {
        ...state,
        filter: action.filter,
        isFetching: true
      };

    case 'RECEIVE_MOVIES':
      return {
        ...state,
        dataSource: action.dataSource,
        movieData: action.movieData,
        filter: action.filter,
        isFetching: false
      };

    case 'FILTER_MOVIES':
      return {
        ...state,
        dataSource: action.dataSource,
        filter: action.filter
      }

    case 'VIEW_CURRENT_MOVIE':
      return {
        ...state,
        currentMovie: action.currentMovie
      }

    default:
      return state;
  }
}
