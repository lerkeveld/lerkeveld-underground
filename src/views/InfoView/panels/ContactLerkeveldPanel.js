import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import BuildIcon from '@material-ui/icons/Build';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InboxIcon from '@material-ui/icons/Inbox';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import SchoolIcon from '@material-ui/icons/School';

import amber from '@material-ui/core/colors/amber';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import ContactListItem from '../ContactListItem';
import DefaultPanel from '../DefaultPanel';

import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactLerkeveldPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik ... van Lerkeveld bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ContactListItem
                    name="Dirk van Tricht"
                    email="direkteur.ftc@gmail.com"
                    color={green[500]}
                    avatarIcon={<BusinessCenterIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Walter Ceyssens"
                    email="walter.ceyssens@jesuits.net"
                    color={amber[500]}
                    avatarIcon={<SchoolIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Gerda Vandoren"
                    email="gerda.vandoren.ftc@gmail.com"
                    color={red[500]}
                    avatarIcon={<RoomServiceIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Onthaal"
                    email="onthaal.ftc@gmail.com"
                    color={purple[500]}
                    avatarIcon={<InboxIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Technische dienst"
                    email="tent.ftc@gmail.com"
                    color={cyan[500]}
                    avatarIcon={<BuildIcon />}
                />
              </List>
          }
        />
    );
}

export default ContactLerkeveldPanel;
