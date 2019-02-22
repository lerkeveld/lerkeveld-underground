import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import StarIcon from '@material-ui/icons/Star';

import amber from '@material-ui/core/colors/amber';
import DefaultPanel from '../DefaultPanel';
import contactPanelStyle from '../../../assets/jss/contactPanelStyle';


function ContactExLerkiesPanel(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        disablePadding
        title="Hoe kan ik de ex-Lerkies bereiken?"
        details={
            <List disablePadding className={classes.root}>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: amber[500]}}>
                  <BeachAccessIcon />
                </Avatar>
                <ListItemText primary="Ex-Lerkies" secondary="EXLERKIES@ls.kuleuven.be" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
            </List>
        }
      />
  );
}

ContactExLerkiesPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contactPanelStyle)(ContactExLerkiesPanel);
