import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { Header, Sidebar } from './components';
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
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router basename={process.env.PUBLIC_URL}>
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
                <Route exact path='/index.html' component={routes.dashboard.component} />;
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
