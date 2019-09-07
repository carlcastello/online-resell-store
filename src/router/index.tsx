import { connect } from 'react-redux';

import Router from './component';
import { IReduxStore } from '../store/types';


const mapStateToProps = (state: IReduxStore) => ({
  isPageLoading: state.page.isPageLoading,
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);