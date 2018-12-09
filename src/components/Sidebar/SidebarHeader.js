import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/icons/Menu';

import sidebarHeaderStyle from '../../assets/jss/sidebarHeaderStyle';


function SidebarHeader(props) {
  const { classes, setDrawerOpen } = props;

  return (
      <ListItem className={classes.container}>
        <ListItemIcon>
          <IconButton
            className={classes.menuButton}
            onClick={setDrawerOpen(false)}
          >
            <Menu />
          </IconButton>
        </ListItemIcon>
        <ListItemText
            primary={
              <Typography variant="h6" className={classes.title}>
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
