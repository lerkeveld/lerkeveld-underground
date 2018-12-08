import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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

import contactPanelStyle from '../../../assets/jss/contactPanelStyle';


function ContactPanel(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        disablePadding
        title="Hoe kan ik ... van Lerkeveld bereiken?"
        details={
            <List disablePadding className={classes.root}>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: green[500]}}>
                  <BusinessCenterIcon />
                </Avatar>
                <ListItemText primary="Inge Zwinnen" secondary="inge.zwinnen.ftc@gmail.com" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: amber[500]}}>
                  <SchoolIcon />
                </Avatar>
                <ListItemText primary="Walter Ceyssens" secondary="walter.ceyssens@jesuits.net" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: red[500]}}>
                  <RoomServiceIcon />
                </Avatar>
                <ListItemText primary="Gerda Vandoren" secondary="gerda.vandoren.ftc@gmail.com" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: purple[500]}}>
                  <InboxIcon />
                </Avatar>
                <ListItemText primary="Onthaal" secondary="onthaal.ftc@gmail.com" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: cyan[500]}}>
                  <BuildIcon />
                </Avatar>
                <ListItemText primary="Technische dienst" secondary="tent.ftc@gmail.com" />
                <StarIcon className={classes.star} />
              </ListItem>
            </List>
        }
      />
  );
}

ContactPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contactPanelStyle)(ContactPanel);
