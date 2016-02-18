import React,
{
  ListView,
} from 'react-native';
import * as types from './../constants/action_types';

const initialState = {
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  movieData: [],
  currentMovie: [],
  filter: '88th Academy Awards',
  isFetching: true
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'REQUEST_MOVIES':
      return {
        ...state,
        isFetching: true
      };

    case 'RECEIVE_MOVIES':
      return {
        ...state,
        dataSource: action.dataSource,
        movieData: action.movieData,
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
