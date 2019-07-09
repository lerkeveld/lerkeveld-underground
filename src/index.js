import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import * as serviceWorker from './serviceWorker';

import theme from './theme';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
