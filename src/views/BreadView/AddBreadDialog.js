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
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onSelect(value);
  };

  render() {
    const {classes, onClose, selectedValue, items, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="dialog-title" {...other}>
        <DialogTitle id="dialog-title">Kies een brood</DialogTitle>
        <div style={{minWidth: '250px'}}>
          <List>
            {items.map(item => (
              <ListItem button onClick={() => this.handleListItemClick(item)} key={item}>
                <ListItemAvatar>
                  <Avatar>
                    <FastfoodIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={"€" + item.price/100} />
              </ListItem>
            ))}
          </List>
        </div>
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
