import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/icons/Menu';

import GithubCircle from '../../assets/icons/GithubCircle';
import Lerkeveld from '../../assets/icons/Lerkeveld';
import useHeaderStyles from '../../assets/jss/useHeaderStyles';


function Header({setDrawerOpen, ...props}) {
    const classes = useHeaderStyles();

    return (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Hidden lgUp implementation="css">
              <IconButton
                className={classes.menuButton}
                onClick={() => setDrawerOpen(true)}
              >
                <Menu />
              </IconButton>
            </Hidden>
            <Hidden mdDown implementation="css">
              <IconButton className={classes.menuButton} disabled>
                <Menu />
              </IconButton>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
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

export default Header;
