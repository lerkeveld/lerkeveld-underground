import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import StarIcon from '@material-ui/icons/Star';

import amber from '@material-ui/core/colors/amber';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactExLerkiesPanel(props) {
    const classes = useContactPanelStyles;
    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik de ex-Lerkies bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: amber[500]}}>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Ex-Lerkies" secondary="EXLERKIES@ls.kuleuven.be" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
              </List>
          }
        />
    );
}

export default ContactExLerkiesPanel;
