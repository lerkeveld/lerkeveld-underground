import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import theme from './theme';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SnackbarProvider maxSnack={1}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
