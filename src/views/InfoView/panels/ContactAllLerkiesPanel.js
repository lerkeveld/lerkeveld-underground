import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';

import blue from '@material-ui/core/colors/blue';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactAllLerkiesPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik alle Lerkies bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: blue[500]}}>
                      <HomeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Alle Lerkies" secondary="LERKIES@ls.kuleuven.be" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
              </List>
          }
        />
    );
}

export default ContactAllLerkiesPanel;
