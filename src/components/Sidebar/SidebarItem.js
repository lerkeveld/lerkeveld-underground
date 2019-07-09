import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import sidebarItemStyle from '../../assets/jss/sidebarItemStyle';


function SidebarItem(props) {
  const { classes, route, setDrawerOpen } = props;

  return (
      <Link to={route.path} className={classes.link}>
        <ListItem button onClick={setDrawerOpen(false)}>
          <ListItemIcon>
            <route.icon />
          </ListItemIcon>
          <ListItemText primary={route.name} primaryTypographyProps={{variant: "body1"}}/>
        </ListItem>
      </Link>
  );
}

SidebarItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarItemStyle)(SidebarItem);
