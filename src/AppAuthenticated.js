import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import routes from './routes';


class AppAuthenticated extends React.Component {

    state = {
      mobileOpen: false
    }

    setDrawerOpen = (open) => {
        this.setState({ mobileOpen: open });
    }

    render() {
      return (
        <React.Fragment>
          <Header setDrawerOpen={this.setDrawerOpen} />
          <Sidebar
            mobileOpen={this.state.mobileOpen}
            routes={routes}
            setDrawerOpen={this.setDrawerOpen}
          />
          <Switch>
            {
              Object.values(routes).map((prop, key) => {
                return <Route exact path={prop.path} component={prop.component} key={key} />;
              })
            }
            <Route exact path="/(|index.html)" component={routes.profile.component} />;
          </Switch>
        </React.Fragment>
      )
    }

}

export default AppAuthenticated;
