import createReducers from '../../common/reducer';

const apple = () =>  'Apple is disgusting.';

export default createReducers([], {
  'apple': apple,
});
