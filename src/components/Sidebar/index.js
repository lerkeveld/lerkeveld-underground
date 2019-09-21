import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';

import useSidebarStyles from '../../assets/jss/useSidebarStyles';


function Sidebar({
    mobileOpen,
    routes,
    setDrawerOpen,
    ...props
}) {
    const classes = useSidebarStyles();

    return (
      <>
        <Hidden mdDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <SidebarList setDrawerOpen={setDrawerOpen} routes={routes} />
          </Drawer>
        </Hidden>
        <Hidden lgUp implementation="css">
          <SwipeableDrawer
            variant="temporary"
            disableBackdropTransition
            open={mobileOpen}
            onOpen={() => setDrawerOpen(true)}
            onClose={() => setDrawerOpen(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarHeader setDrawerOpen={setDrawerOpen} />
            <SidebarList setDrawerOpen={setDrawerOpen} routes={routes} />
          </SwipeableDrawer>
        </Hidden>
      </>
    );
}

export default Sidebar;
