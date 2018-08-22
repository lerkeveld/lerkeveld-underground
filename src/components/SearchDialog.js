import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, List, ListItem, ListItemIcon, ListItemText, withMobileDialog
} from '@material-ui/core';

import { LocationOn, Email, Smartphone } from '@material-ui/icons';


class SearchDialog extends React.Component {

  render() {
    const { user, open, onClose, fullScreen } = this.props;
    const firstName = 'firstName' in user ? user['firstName']: '';
    const lastName = 'lastName' in user ? user['lastName']: '';
    const corridor = 'corridor' in user ? user['corridor']: '';
    const room = 'room' in user ? user['room']: '';
    const email = 'email' in user ? user['email']: 'Niet gedeeld';
    const phone = 'phone' in user ? user['phone']: 'Niet gedeeld';

    return (
      <Dialog
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${firstName} ${lastName}`}</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2">Contact details</DialogContentText>
          <List>
            <ListItem>
              <ListItemIcon><LocationOn /></ListItemIcon>
              <ListItemText primary={`${corridor}/${room.padStart(4, '0')}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon><Email /></ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
            <ListItem>
              <ListItemIcon><Smartphone /></ListItemIcon>
              <ListItemText primary={phone} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withMobileDialog()(SearchDialog);
