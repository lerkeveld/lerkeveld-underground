import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import BuildIcon from '@material-ui/icons/Build';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InboxIcon from '@material-ui/icons/Inbox';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

import amber from '@material-ui/core/colors/amber';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import DefaultPanel from '../DefaultPanel';

import useContactPanelStyles from '../../../assets/jss/useContactPanelStyles';


function ContactPanel(props) {
    const classes = useContactPanelStyles();

    return (
        <DefaultPanel
          disablePadding
          title="Hoe kan ik ... van Lerkeveld bereiken?"
          details={
              <List disablePadding className={classes.root}>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: green[500]}}>
                      <BusinessCenterIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Dirk van Tricht" secondary="direkteur.ftc@gmail.com" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: amber[500]}}>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Walter Ceyssens" secondary="walter.ceyssens@jesuits.net" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: red[500]}}>
                      <RoomServiceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Gerda Vandoren" secondary="gerda.vandoren.ftc@gmail.com" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: purple[500]}}>
                      <InboxIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Onthaal" secondary="onthaal.ftc@gmail.com" />
                  <StarIcon className={classes.star} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: cyan[500]}}>
                      <BuildIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Technische dienst" secondary="tent.ftc@gmail.com" />
                  <StarIcon className={classes.star} />
                </ListItem>
              </List>
          }
        />
    );
}

export default ContactPanel;
