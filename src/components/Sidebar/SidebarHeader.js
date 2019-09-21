import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/icons/Menu';

import useSidebarHeaderStyles from '../../assets/jss/useSidebarHeaderStyles';


function SidebarHeader({
    setDrawerOpen,
    ...props
}) {
    const classes = useSidebarHeaderStyles();

    return (
        <ListItem className={classes.container}>
          <ListItemIcon>
            <IconButton
              className={classes.menuButton}
              onClick={() => setDrawerOpen(false)}
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

export default SidebarHeader;
