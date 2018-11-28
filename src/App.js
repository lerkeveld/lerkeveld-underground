import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import routes from './routes';
import theme from './theme';

class App extends React.Component {

  state = {
      mobileOpen: false
  }
  setDrawerOpen = (open) => {
      this.setState({ mobileOpen: open });
  }

  render() {
    const { mobileOpen } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div> 
              <Header setDrawerOpen={this.setDrawerOpen} />
              <Sidebar
                mobileOpen={mobileOpen}
                routes={routes}
                setDrawerOpen={this.setDrawerOpen}
              />
              <Switch>
                {
                  Object.values(routes).map((prop, key) => {
                    return <Route exact path={prop.path} component={prop.component} key={key} />;
                  })
                }
                <Route exact path={['/', '/index.html']} component={routes.profile.component} />;
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
