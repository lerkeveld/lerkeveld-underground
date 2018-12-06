import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';

class SidebarLogout extends React.Component {

  handleLogoutClick = () => {
    // TODO: send POST request
    this.props.closeDrawer();
    this.props.history.push('/auth/login');
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

export default withRouter(SidebarLogout);
