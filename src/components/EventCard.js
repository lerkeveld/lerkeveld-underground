import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia } from '@material-ui/core';

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
              root: classes.cardHeaderRoot,
              content: classes.cardHeaderContent,
              title: classes.cardHeaderTitle,
              subheader: classes.cardHeaderSubTitle
          }}
          avatar={
              <FacebookBox className={classes.icon}/>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={img}
          component={FacebookLink}
          title={title}
        />
      </Card>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(eventCardStyle)(EventCard);
