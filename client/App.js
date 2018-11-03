/**
 * Root Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#ff4400',
    },
  },
});

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={props.store}>
        <IntlWrapper>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </IntlWrapper>
      </Provider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
