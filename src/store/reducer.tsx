import { combineReducers } from 'redux';

import createReducers from '../common/reducer';
import categoriesReducer from '../components/search-bar/reducer';

import { SET_PAGE_LOADING } from '../common/actions';

import { IPageStore } from './types';
import { PAGE_INITIAL_STATE } from './initialState';

export const pageReducer = createReducers(PAGE_INITIAL_STATE, {
  [SET_PAGE_LOADING]: (state: IPageStore, payload: Object) => ({
    ...state,
    loadingState: {...state.loadingState, ...payload}
  })
});

export default combineReducers({
  page: pageReducer,
  categories: categoriesReducer
});
