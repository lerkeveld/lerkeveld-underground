import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import amber from '@material-ui/core/colors/amber';

import ContactListItem from '../ContactListItem';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactExLerkiesPanel(props) {
    const classes = useContactPanelStyles();
    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik de ex-Lerkies bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ContactListItem
                    name="Ex-Lerkies"
                    email="exlerkies@ls.kuleuven.be"
                    color={amber[500]}
                    avatarIcon={<BeachAccessIcon />}
                />
                <Divider />
              </List>
          }
        />
    );
}

export default ContactExLerkiesPanel;
