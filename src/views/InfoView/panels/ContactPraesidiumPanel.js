import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FlightIcon from '@material-ui/icons/Flight';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import WifiIcon from '@material-ui/icons/Wifi';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';

import ContactListItem from '../ContactListItem';
import DefaultPanel from '../DefaultPanel';
import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactPraesidiumPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik ... van het praesidium bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ContactListItem
                    name="Praeses"
                    email="praeses@lerkies.studentenweb.org"
                    color={pink[500]}
                    avatarIcon={<FavoriteIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Vice-Praeses"
                    email="vice@lerkies.studentenweb.org"
                    color={purple[500]}
                    avatarIcon={<AccountBalanceIcon />}
                />
                <Divider />
                <ContactListItem
                    name="STV"
                    email="stv@lerkies.studentenweb.org"
                    color={deepPurple[500]}
                    avatarIcon={<GroupWorkIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Activiteiten"
                    email="activiteiten@lerkies.studentenweb.org"
                    color={indigo[500]}
                    avatarIcon={<FlashOnIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Sport"
                    email="sport@lerkies.studentenweb.org"
                    color={blue[500]}
                    avatarIcon={<SportsSoccerIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Kotbar"
                    email="kotbar@lerkies.studentenweb.org"
                    color={teal[500]}
                    avatarIcon={<LocalBarIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Cultuur"
                    email="cultuur@lerkies.studentenweb.org"
                    color={green[500]}
                    avatarIcon={<FlightIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Materiaal"
                    email="materiaal@lerkies.studentenweb.org"
                    color={lime[500]}
                    avatarIcon={<FolderSharedIcon />}
                />
                <Divider />
                <ContactListItem
                    name="Brood, Melk & Water"
                    email="brood.en.melk@lerkies.studentenweb.org"
                    color={yellow[500]}
                    avatarIcon={<FreeBreakfastIcon />}
                />
                <Divider />
                <ContactListItem
                    name="IT & Communicatie"
                    email="it@lerkies.studentenweb.org"
                    color={amber[500]}
                    avatarIcon={<WifiIcon />}
                />
                <Divider />
                <Divider />
                <ContactListItem
                    name="Skireis"
                    email="skireis@lerkies.studentenweb.org"
                    color={orange[500]}
                    avatarIcon={<AcUnitIcon/>}
                />
                <Divider />
              </List>
          }
        />
    );
}

export default ContactPraesidiumPanel;
