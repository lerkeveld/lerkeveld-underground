import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import SidebarItem from './SidebarItem';
import SidebarLogout from './SidebarLogout';


function SidebarList({
    setDrawerOpen,
    routes,
    ...props
}) {
    return (
        <List>
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.profile} />
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.search} />
          <Divider />
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.bread} />
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.kotbar} />
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.material} />
          <Divider />
          <SidebarItem setDrawerOpen={setDrawerOpen} route={routes.info} />
          <Divider />
          <SidebarLogout setDrawerOpen={setDrawerOpen} />
          <Divider />
        </List>
    )
}

export default SidebarList;
