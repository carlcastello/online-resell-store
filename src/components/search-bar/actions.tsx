import { setPageLoading } from '../../common/actions';
import { CATEGORY_PAGE } from '../../common/constants';

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
  const setPageLoadingFunction = setPageLoading(CATEGORY_PAGE);
  return (dispatch: any) => {
    dispatch(setPageLoadingFunction(true));
    return TEST_FETCH.then((value) => {
      dispatch({type: FETCH_CATEGORIES, payload: value});
      dispatch(setPageLoadingFunction(false));
    })
  }
}