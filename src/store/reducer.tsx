import { combineReducers } from 'redux';

import categoriesReducer from '../components/search-bar/reducer';

export default combineReducers({
  categories: categoriesReducer
});