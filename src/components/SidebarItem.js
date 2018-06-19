import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import sidebarItemStyle from '../assets/jss/sidebarItemStyle';

function SidebarItem(props) {
  const { classes, route, closeDrawer } = props;

  return (
      <Link to={route.path} className={classes.link}>
        <ListItem button onClick={closeDrawer}>
          <ListItemIcon>
            <route.icon />
          </ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItem>
      </Link>
  );
}

SidebarItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarItemStyle)(SidebarItem);
