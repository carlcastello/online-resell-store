import { connect } from 'react-redux';

import { fetchCategories } from './actions';

import SearchBar from './component';

const mapStateToProps = null;

const mapDispatchToProps = {
  fetchCategories
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);