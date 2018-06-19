import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';

import { FacebookBox } from '../assets/icons';
import eventCardStyle from '../assets/jss/eventCardStyle';

function EventCard(props) {
  const { classes } = props;
  const { title, date, link, img } = props;
  
  const FacebookLink = props => <a target="_blank" rel="noopener noreferrer" href={link} {...props} />;

  return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
              content: classes.cardHeaderContent
          }}
          avatar={
              <IconButton title="View on Facebook!" href={link} target="_blank" rel="noopener noreferrer">
                <FacebookBox className={classes.icon}/>
              </IconButton>
          }
          title={<div title={title} className={classes.cardHeaderTitle}>{title}</div>}
          subheader={<div className={classes.cardHeaderTitle}>{date}</div>}
        />
        <CardMedia
          className={classes.media}
          image={img}
          component={FacebookLink}
        />
      </Card>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(eventCardStyle)(EventCard);
