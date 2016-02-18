import * as types from '../constants/action_types';

export function fetchMovies(callback) {
  return {};
}

export function updateMovieStore(dataSource, movieData) {
  return {
    type: types.UPDATE_MOVIE_STORE,
    movieData,
    dataSource
  };
}
