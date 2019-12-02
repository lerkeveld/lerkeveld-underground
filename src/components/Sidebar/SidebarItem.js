import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useSidebarItemStyles from '../../assets/jss/useSidebarItemStyles';


function SidebarItem({
    route,
    setDrawerOpen,
    ...props
}) {
    const classes = useSidebarItemStyles();

    return (
        <Link to={route.path} className={classes.link}>
            <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <route.icon />
            </ListItemIcon>
            <ListItemText primary={route.name} primaryTypographyProps={{variant: "body1"}}/>
          </ListItem>
        </Link>
    );
}

export default SidebarItem;
