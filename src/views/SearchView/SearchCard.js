import React from 'react';
import PropTypes from 'prop-types';
import amber from '@material-ui/core/colors/amber';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import searchCardStyle from '../../assets/jss/searchCardStyle';


function SearchCard(props) {
  const { classes, user = {}, ...rest } = props;

  const { first_name = "", last_name = "", corridor = "", room = 0 } = user;

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
                {first_name.length === 0 ? '' : first_name[0]}
              </Avatar>}
          title={`${first_name} ${last_name}`}
          subheader={`${corridor}/${room.toString().padStart(4, '0')}`}
        />
      </Card>
  );
}

SearchCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(searchCardStyle)(SearchCard);
