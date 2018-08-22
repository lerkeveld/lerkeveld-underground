import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';

import profileCardStyle from '../assets/jss/profileCardStyle';

function SearchCard(props) {
  const { classes, user } = props;
  const firstName = 'firstName' in user ? user['firstName']: '';
  const lastName = 'lastName' in user ? user['lastName']: '';
  const corridor = 'corridor' in user ? user['corridor']: '';
  const room = 'room' in user ? user['room']: '';
  return (
      <Card>
        <CardHeader
          classes={{
              root: classes.cardHeaderRoot,
              content: classes.cardHeaderContent,
              title: classes.cardHeaderTitle,
              subheader: classes.cardHeaderSubTitle
          }}
          avatar={
              <Avatar style={{backgroundColor: amber[100], color: amber[600]}}>
                {firstName.length === 0 ? '' : firstName[0]}
              </Avatar>}
          title={`${firstName} ${lastName}`}
          subheader={`${corridor}/${room.padStart(4, '0')}`}
        />
      </Card>
  );
}

SearchCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileCardStyle)(SearchCard);
