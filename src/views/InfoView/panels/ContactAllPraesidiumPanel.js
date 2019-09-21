import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import StarIcon from '@material-ui/icons/Star';

import red from '@material-ui/core/colors/red';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactAllPraesidiumPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik alle praesidiumleden bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: red[500]}}>
                      <LocationCityIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Alle Praesidiumleden" secondary="LVPRAES@ls.kuleuven.be" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
              </List>
          }
        />
    );
}

export default ContactAllPraesidiumPanel;
