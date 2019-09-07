import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';

import Pages from './router';
import MainReducer from './store/reducer';
import AppTheme from './app-theme';


const App: React.FC = () => {
  return (
    <Provider store={createStore(MainReducer, applyMiddleware(thunkMiddleware))}>
      <ThemeProvider theme={AppTheme}>
        <Pages/>
      </ThemeProvider>  
    </Provider>
  );
}

export default App;
