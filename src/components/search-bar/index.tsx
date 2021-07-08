import { connect } from 'react-redux';

import { IReduxStore } from '../../store/types';

import { fetchCategories } from './actions';
import SearchBar from './component';
import { getCategoriesSelector } from './selectors';

const mapStateToProps = (state: IReduxStore) => ({
  categories: getCategoriesSelector(state)
});

const mapDispatchToProps = {
  fetchCategories
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);