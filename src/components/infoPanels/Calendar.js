import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from './DefaultPanel';

const styles = theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function Calendar(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Hoe kan ik de Lerkeveld kalender toevoegen?"
        details={
            <div>
            <Typography>
              De Lerkeveld kalender is een <span className={classes.bold}>publiek toegankelijke Google kalender</span>.
              Via deze <a target="_blank" rel="noopener noreferrer" href="/calendar/">link</a> kan je de kalender <span className={classes.bold}>online bekijken</span>.
              Om de kalender toe te voegen aan <span className={classes.bold}>applicaties</span> zoals Google Calendar en iCloud Calendar, kan je volgende <a target="_blank" rel="noopener noreferrer" href="/calendar/public.ics">link</a> gebruiken.
              Specifieke details om een kalender toe te voegen via URL vind je op volgende pagina's:
            </Typography>
            <ul>
              <li><Typography><a target="_blank" rel="noopener noreferrer" href="https://support.google.com/calendar/answer/37100">Google Calendar</a></Typography></li>
              <li><Typography><a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/en-us/HT202361">iCloud Calendar</a></Typography></li>
            </ul>
            </div>
        }
      />
  );
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
