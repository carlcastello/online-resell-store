import createReducers from '../../common/reducer';

import { FETCH_CATEGORIES } from './actions';
import { IOptionType } from './component/types';


const initialStore = '';

export default createReducers(initialStore, {
  [FETCH_CATEGORIES]: (state: Object, payload: IOptionType[]) => {
    return payload;
  },
});
