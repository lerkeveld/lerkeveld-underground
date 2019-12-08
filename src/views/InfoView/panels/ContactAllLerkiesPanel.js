import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import HomeIcon from '@material-ui/icons/Home';
import blue from '@material-ui/core/colors/blue';

import ContactListItem from '../ContactListItem';
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
                <ContactListItem
                    name="Alle Lerkies"
                    email="lerkies@ls.kuleuven.be"
                    color={blue[500]}
                    avatarIcon={<HomeIcon />}
                />
                <Divider />
              </List>
          }
        />
    );
}

export default ContactAllLerkiesPanel;
