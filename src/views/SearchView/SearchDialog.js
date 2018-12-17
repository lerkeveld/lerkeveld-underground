import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import Smartphone from '@material-ui/icons/Smartphone';


function SearchDialog(props) {
  const { user, open, onClose, fullScreen, ...rest } = props;

  const { first_name = "", last_name = "", corridor = "", room = 0 } = user;
  let { email = "", phone = "" } = user;
  if (email === null)
    email = "Niet gedeeld"
  if (phone === null)
    phone = "Niet gedeeld"

  return (
    <Dialog
      {...rest}
      fullWidth
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`${first_name} ${last_name}`}</DialogTitle>
      <DialogContent>
        <DialogContentText variant="body2">Contact details</DialogContentText>
        <List>
          <ListItem>
            <ListItemIcon><LocationOn /></ListItemIcon>
            <ListItemText primary={`${corridor}/${room.toString().padStart(4, '0')}`} />
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

export default withMobileDialog()(SearchDialog);
