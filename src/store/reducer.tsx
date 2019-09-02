import { combineReducers } from 'redux';

import createReducers from '../common/reducer';
import categoriesReducer from '../components/search-bar/reducer';

import { SET_PAGE_LOADING } from '../common/actions';

export const pageReducer = createReducers({isPageLoading: false}, {
  [SET_PAGE_LOADING]: (state: any, payload: boolean) => {
    return ({
      ...state,
      isPageLoading: payload
    });
  },
});

export default combineReducers({
  page: pageReducer,
  categories: categoriesReducer
});
