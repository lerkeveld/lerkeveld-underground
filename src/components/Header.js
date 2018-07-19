import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { GithubCircle, Lerkeveld } from '../assets/icons';
import headerStyle from '../assets/jss/headerStyle';

function Header(props) {
  const { classes, setDrawerOpen } = props;

  return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp implementation="css">
            <IconButton
              className={classes.menuButton}
              onClick={() => {setDrawerOpen(true)}}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Hidden mdDown implementation="css">
            <IconButton className={classes.menuButton} disabled>
              <Menu />
            </IconButton>
          </Hidden>
          <Typography className={classes.title} variant="title">
            Lerkeveld
          </Typography>
          <Hidden xsDown implementation="css">
            <IconButton title="Github repository" color="inherit" target="_blank" rel="noopener noreferrer" href="https://github.com/lerkeveld/lerkeveld-underground">
              <GithubCircle className={classes.actionButton}/>
            </IconButton>
          </Hidden>
          <IconButton title="Lerkeveld website" color="inherit" target="_blank" rel="noopener noreferrer" href="/">
            <Lerkeveld className={classes.actionButton}/>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
