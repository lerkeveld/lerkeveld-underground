import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import red from '@material-ui/core/colors/amber';
import PersonIcon from '@material-ui/icons/Person';

import profileCardStyle from '../assets/jss/profileCardStyle';

function SearchCard(props) {
  const {
    classes, firstName, lastName, room, corridor
  } = props;

  return (
      <Card>
        <CardHeader
          classes={{
              root: classes.cardHeaderRoot,
              content: classes.cardHeaderContent,
              title: classes.cardHeaderTitle,
              subheader: classes.cardHeaderSubTitle
          }}
          avatar={<Avatar style={{backgroundColor: red[100], color: red[600]}}>{firstName[0]}</Avatar>}
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
