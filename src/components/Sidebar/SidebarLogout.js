import React from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';

import * as api from '../../api';


class SidebarLogout extends React.Component {

  handleLogoutClick = () => {
    api.removeCredentials().then(() => {
      this.props.setDrawerOpen(false);
      this.props.history.push('/auth/login');
    });
  }

  render() {
    return (
        <ListItem button onClick={this.handleLogoutClick}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{variant: "body1"}}/>
        </ListItem>
    );
  }
}

export default withRouter(SidebarLogout);
