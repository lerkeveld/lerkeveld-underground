import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import red from '@material-ui/core/colors/red';

import ContactListItem from '../ContactListItem';
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
                <ContactListItem
                    name="Alle Praesidiumleden"
                    email="lvpraes@ls.kuleuven.be"
                    color={red[500]}
                    avatarIcon={<LocationCityIcon />}
                />
                <Divider />
              </List>
          }
        />
    );
}

export default ContactAllPraesidiumPanel;
