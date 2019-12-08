import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import GroupIcon from '@material-ui/icons/Group';

import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';

import ContactListItem from '../ContactListItem';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactGangVWPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik de gangverantwoordelijken van ... bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ContactListItem
                    name="N0"
                    email="n0@lerkies.studentenweb.org"
                    color={pink[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="N1"
                    email="n1@lerkies.studentenweb.org"
                    color={purple[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="N2"
                    email="n2@lerkies.studentenweb.org"
                    color={deepPurple[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="N3"
                    email="n3@lerkies.studentenweb.org"
                    color={indigo[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Z-1"
                    email="z-1@lerkies.studentenweb.org"
                    color={blue[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Z0"
                    email="z0@lerkies.studentenweb.org"
                    color={teal[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Z1"
                    email="z1@lerkies.studentenweb.org"
                    color={green[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Z2"
                    email="z2@lerkies.studentenweb.org"
                    color={lime[500]}
                    avatarIcon={<GroupIcon />}
                />
                <Divider />
              </List>
          }
        />
    );
}

export default ContactGangVWPanel;
