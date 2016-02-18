import * as types from '../constants/action_types';
import React,
{
  ListView,
} from 'react-native';

export function fetchMovies(REQUEST_URL, dataSource) {
  return function (dispatch) {
    dispatch(requestMovies())

    return fetch(REQUEST_URL)

      .then((response) => response.json())

      .then((responseData) => {
        dispatch(receiveMovies(
          dataSource.cloneWithRows(responseData.movies),
          responseData.movies))
      })
      .done();
  };
}

export function requestMovies() {
  return {
    type: types.REQUEST_MOVIES
  };
}

export function receiveMovies(dataSource, movieData) {
  return {
    type: types.RECEIVE_MOVIES,
    dataSource,
    movieData
  };
}

export function filterMovies(dataSource, filter) {
  filter = filter || '88th Academy Awards';
  return {
    type: types.FILTER_MOVIES,
    dataSource,
    filter
  };
}

export function viewCurrentMovie(currentMovie) {
  return {
    type: types.VIEW_CURRENT_MOVIE,
    currentMovie
  };
}
