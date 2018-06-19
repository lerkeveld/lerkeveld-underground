import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

class SidebarLogout extends React.Component {

  handleLogoutClick = () => {
    const { closeDrawer } = this.props;
    closeDrawer();
    // TODO: send POST request
    // TODO: redirect to main /
    console.log('Logout');
  }

  render() {
    return (
        <ListItem button onClick={this.handleLogoutClick}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
    );
  }
}

export default SidebarLogout;
