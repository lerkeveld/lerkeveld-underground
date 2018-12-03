import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppAuthenticated from './AppAuthenticated';
import AppAnonymous from './AppAnonymous';

import theme from './theme';

class App extends React.Component {

  state = {
      isAuthenticated: true
  }

  setAuthenticated(value) {
    this.setState({isAuthenticated: value});
  }

  // fake refreshToken Promise
  refreshToken() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.refreshToken().then(() => {
      this.setState({isAuthenticated: false});
      const node = document.getElementById('progress')
      if (node) {
        node.classList.add('available');
        setTimeout(() => {node.remove();}, 2000);
      }
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            { this.state.isAuthenticated
                ? <AppAuthenticated />
                : <AppAnonymous setAuthenticated={this.setAuthenticated.bind(this)} />
            }
          </BrowserRouter>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
