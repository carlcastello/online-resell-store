import { connect } from 'react-redux';

import Router from './component';
import { IReduxStore } from '../store/types';

import { isFullPageLoading } from '../common/selectors';

const mapStateToProps = (state: IReduxStore) => ({
  isPageLoading: isFullPageLoading(state)
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);