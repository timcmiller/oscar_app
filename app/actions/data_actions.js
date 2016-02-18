import * as types from '../constants/action_types';
import React,
{
  ListView,
} from 'react-native';

export function fetchMovies(REQUEST_URL, dataSource, filter) {
  return function (dispatch) {
    dispatch(requestMovies(filter))

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

export function requestMovies(filter) {
  filter = filter || '88th Academy Awards';
  return {
    type: types.REQUEST_MOVIES,
    filter
  };
}

export function receiveMovies(dataSource, movieData, filter) {
  filter = filter || '88th Academy Awards';
  return {
    type: types.RECEIVE_MOVIES,
    dataSource,
    movieData,
    filter
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
