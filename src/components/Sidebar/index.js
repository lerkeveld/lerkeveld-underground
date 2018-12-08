import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'
import SidebarLogout from './SidebarLogout'

import sidebarStyle from '../../assets/jss/sidebarStyle';


function Sidebar(props) {
  const { classes, mobileOpen, routes, setDrawerOpen } = props;

  const links = (
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

  return (
    <div>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          { links }
        </Drawer>
      </Hidden>
      <Hidden lgUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          disableBackdropTransition
          open={mobileOpen}
          onOpen={setDrawerOpen(true)}
          onClose={setDrawerOpen(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SidebarHeader setDrawerOpen={setDrawerOpen} />
          { links }
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);
