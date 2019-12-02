import React from 'react';
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

import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function SearchDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const { user={}, open, onClose, ...rest } = props;
    const {
        first_name = null,
        last_name = null,
        corridor = null,
        room = null,
        email = null,
        phone = null
    } = user;

    let fullname = "Status unknown";
    if (first_name !== null && last_name !== null)
      fullname = `${first_name} ${last_name}`
    let loc = "Status unknown";
    if (corridor !== null && room !== null)
      loc = `${corridor}/${room.toString().padStart(4, '0')}`;
    let email_p = email;
    if (email === null)
      email_p = "Niet gedeeld"
    let phone_p = phone;
    if (phone === null)
      phone_p = "Niet gedeeld"

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
        <DialogTitle id="alert-dialog-title">{fullname}</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2">Contact details</DialogContentText>
          <List>
            <ListItem>
              <ListItemIcon><LocationOn /></ListItemIcon>
              <ListItemText primary={loc} />
            </ListItem>
            <ListItem>
              <ListItemIcon><Email /></ListItemIcon>
              <ListItemText primary={email_p} />
            </ListItem>
            <ListItem>
              <ListItemIcon><Smartphone /></ListItemIcon>
              <ListItemText primary={phone_p} />
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

export default SearchDialog;
