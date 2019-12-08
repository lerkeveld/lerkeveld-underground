import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import StarIcon from '@material-ui/icons/Star';

import useContactPanelStyles from '../../assets/jss/useContactPanelStyles';


function ContactListItem({
    name,
    email,
    color,
    avatarIcon,
    ...props
}) {
    const classes = useContactPanelStyles();
    return (
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{backgroundColor: color}}>
              {avatarIcon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={email} />
          <StarIcon className={classes.star} />
        </ListItem>
    );
}

export default ContactListItem;
