import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import Block from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';

import profileCardStyle from '../../assets/jss/profileCardStyle';

function DefaultCard(props) {
  const { classes, disabled, name, onClick, avatarIcon, avatarColor } = props;

  const editIcon = <IconButton title="Edit" onClick={onClick}><Edit /></IconButton>;
  const blockIcon = <IconButton title="Contacteer IT"><Block /></IconButton>;

  let { textValue } = props;
  if (textValue === undefined)
    textValue = <span className={classes.blur}>{'a'.repeat(16)}</span>

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
            <Avatar style={{"backgroundColor": avatarColor}}>
              {avatarIcon}
            </Avatar>
          }
          title={name}
          subheader={textValue}
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
