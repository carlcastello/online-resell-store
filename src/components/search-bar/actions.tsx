import { setPageLoading } from '../../common/actions';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES_ACTION'


const TEST_FETCH = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]);
  }, 500);
});

export const fetchCategories = () => {
  return (dispatch: any) => {
    dispatch(setPageLoading(true));
    return TEST_FETCH.then((value) => {
      dispatch({type: FETCH_CATEGORIES, payload: value});
      dispatch(setPageLoading(false));
    })
  }
}