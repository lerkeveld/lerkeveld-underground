import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import routes from '../routes';
import EditView from '../views/EditView';


class MainLayout extends React.Component {

    state = {
      mobileOpen: false
    }

    setDrawerOpen = (open) => () => {
        this.setState({ mobileOpen: open });
    }

    render() {
      return <React.Fragment>
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
                 <Route path="/edit" component={EditView} />
                 <Route exact path="/(|index.html)" component={routes.profile.component} />;
                 <Redirect to="/" />;
               </Switch>
             </React.Fragment>
    }

}

export default MainLayout;
