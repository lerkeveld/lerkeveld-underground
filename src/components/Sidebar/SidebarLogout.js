import React from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';

import * as api from '../../api';


function SidebarLogout({
    setDrawerOpen,
    history,
    ...props
}) {

    const handleLogoutClick = async () => {
        setDrawerOpen(false);
        history.push('/auth/login');
        try {
            await api.removeCredentials();
        } catch {}
    }

    return (
        <ListItem button onClick={handleLogoutClick}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{variant: "body1"}}/>
        </ListItem>
    );
}

export default withRouter(SidebarLogout);
