import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';



class AddBreadDialog extends React.Component {
  handleListItemClick = value => () => {
    this.props.onSelect(value.name);
  };

  render() {
    const {classes, onClose, selectedValue, items, ...other } = this.props;

    return (
      <Dialog onClose={onClose} aria-labelledby="dialog-title" maxWidth="xs" fullWidth {...other}>
        <DialogTitle id="dialog-title">Bestel een brood</DialogTitle>
          <List>
            {items.map(item => (
              <ListItem button onClick={this.handleListItemClick(item)}>
                <ListItemAvatar>
                  <Avatar>
                    <FastfoodIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={"€" + item.price/100} />
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

AddBreadDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  items: PropTypes.array,
};

export default AddBreadDialog;
