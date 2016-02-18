import * as types from '../constants/action_types';

export function isLoaded() {
  return {
    type: types.IS_LOADED
  };
}

export function selectMovie() {
  return {
    type: types.SELECT_MOVIE
  };
}

export function expandFilters() {
  return {
    type: types.EXPAND_FILTERS
  };
}

export function selectFilter() {
  return {
    type: types.SELECT_FILTER
  };
}

export function selectPicture() {
  return {
    type: types.SELECT_PICTURE
  };
}
