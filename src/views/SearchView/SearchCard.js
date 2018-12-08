import React from 'react';
import PropTypes from 'prop-types';
import amber from '@material-ui/core/colors/amber';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import searchCardStyle from '../../assets/jss/searchCardStyle';

function getField(user, field) {
  return field in user ? user[field] : ''
}

function SearchCard(props) {
  const { classes, user, ...rest } = props;
  const firstName = getField(user, 'firstName');
  const lastName = getField(user, 'lastName');
  const corridor = getField(user, 'corridor');
  const room = getField(user, 'room');

  return (
      <Card {...rest}>
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

export default withStyles(searchCardStyle)(SearchCard);
