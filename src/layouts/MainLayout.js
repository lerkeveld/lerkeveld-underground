import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import routes from '../routes';
import EditView from '../views/EditView';


function MainLayout(props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const setDrawerOpen = useCallback((open) => {
        setMobileOpen(open)
    }, []);

    return (
        <>
          <Header setDrawerOpen={setDrawerOpen} />
          <Sidebar
            mobileOpen={mobileOpen}
            routes={routes}
            setDrawerOpen={setDrawerOpen}
          />
          <Switch>
            {
              Object.values(routes).map((prop, key) => {
                return <Route exact path={prop.path} component={prop.component} key={key} />
              })
            }
            <Route path="/edit" component={EditView} />
            <Route exact path="/(|index.html)" component={routes.profile.component} />
            <Redirect to="/" />
          </Switch>
        </>
    )
}

export default MainLayout;
