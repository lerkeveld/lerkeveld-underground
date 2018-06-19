import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, IconButton, Typography, Avatar } from '@material-ui/core';
import { Edit, Block } from '@material-ui/icons';

import profileCardStyle from '../../assets/jss/profileCardStyle';

function DefaultCard(props) {
  const {
    classes, disabled, name, textValue, onClick, avatarIcon, avatarColor
  } = props;

  const editIcon = <IconButton title="Edit" onClick={onClick}><Edit /></IconButton>;
  const blockIcon = <IconButton title="Contacteer IT"><Block /></IconButton>;

  return (
      <Card>
        <CardHeader
          classes={{
              content: classes.cardHeaderContent
          }}
          avatar={
            <Avatar style={{"backgroundColor": avatarColor}}>
              {avatarIcon}
            </Avatar>
          }
          title={
            <Typography variant="subheading" noWrap>
              {name}
            </Typography>
          }
          subheader={
            <Typography variant="subheading" color="textSecondary" noWrap>
              <span className={classes.subheader}>
                {textValue}
              </span>
            </Typography>
          }
          action={disabled ? blockIcon: editIcon}
          disabled={disabled}
        />
      </Card>
  );
}

DefaultCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileCardStyle)(DefaultCard);
