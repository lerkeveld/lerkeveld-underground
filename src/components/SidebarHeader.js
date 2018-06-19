import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    ListItem, ListItemIcon, ListItemText, Typography, IconButton
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import sidebarHeaderStyle from '../assets/jss/sidebarHeaderStyle';

function SidebarHeader(props) {
  const { classes, setDrawerOpen } = props;
  return (
      <ListItem className={classes.container}>
      <ListItemIcon>
        <IconButton
          className={classes.menuButton}
          onClick={() => {setDrawerOpen(false)}}
        >
          <Menu />
        </IconButton>
      </ListItemIcon>
      <ListItemText
          primary={
            <Typography className={classes.title} variant="title">
              Lerkeveld
            </Typography>
          }
        />
      </ListItem>
  );
}

SidebarHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarHeaderStyle)(SidebarHeader);
