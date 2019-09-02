import createReducers from '../../common/reducer';

import { FETCH_CATEGORIES } from './actions';


const initialStore = {};

export default createReducers(initialStore, {
  [FETCH_CATEGORIES]: (state: Object, payload: string) => {
    return ({
      ...state,
      categories: payload
    });
  },
});
