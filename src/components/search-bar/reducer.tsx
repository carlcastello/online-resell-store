import createReducers from '../../common/reducer';
import { any } from 'prop-types';

export default createReducers([], {
  'apple': (state: any, action: any) => {
    console.log(state, action);
    return state;
  },
});
