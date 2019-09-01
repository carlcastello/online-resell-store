import { connect } from 'react-redux';

import { fetchCategories } from './action';

import SearchBar from './component';

const mapStateToProps = null;

const mapDispatchToProps = {
  fetchCategories
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);