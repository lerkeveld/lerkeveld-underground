import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';

import blue from '@material-ui/core/colors/blue';
import DefaultPanel from '../DefaultPanel';
import contactPanelStyle from '../../../assets/jss/contactPanelStyle';


function ContactAllLerkiesPanel(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        disablePadding
        title="Hoe kan ik alle Lerkies bereiken?"
        details={
            <List disablePadding className={classes.root}>
              <Divider />
              <ListItem>
                <Avatar style={{backgroundColor: blue[500]}}>
                  <HomeIcon />
                </Avatar>
                <ListItemText primary="Alle Lerkies" secondary="LERKIES@ls.kuleuven.be" />
                <StarIcon className={classes.star} />
              </ListItem>
              <Divider />
            </List>
        }
      />
  );
}

ContactAllLerkiesPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contactPanelStyle)(ContactAllLerkiesPanel);
