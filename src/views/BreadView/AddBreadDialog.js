import React from 'react';
import amber from '@material-ui/core/colors/amber';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import AddIcon from '@material-ui/icons/Add';
import * as utils from '../../utils';


class AddBreadDialog extends React.Component {

  handleListItemClick = value => () => {
    this.props.onSelect(value.name);
  };

  render() {
    const {open, onSelect, onClose, items = [], ...other} = this.props;

    return (
      <Dialog
        aria-labelledby="dialog-title"
        open={open}
        onSelect={onSelect}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        {...other}
      >
        <DialogTitle id="dialog-title">Bestel een brood</DialogTitle>
          <List>
            {items.map(item => (
              <ListItem
                button
                key={item.id}
                onClick={this.handleListItemClick(item)}
              >
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: amber[100], color: amber[600]}}>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={utils.formatMoney(item.price)}
                />
              </ListItem>
            ))}
          </List>
        <DialogActions>
          <Button onClick={onClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddBreadDialog;
