import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';

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
