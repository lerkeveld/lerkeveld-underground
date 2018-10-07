import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from './DefaultPanel';

const styles = theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function Subrent(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Wat moet ik doen als ik mijn kamer voor een tijd wil onderverhuren?"
        details={
            <Typography>
              Alle informatie rond onderverhuren bij de KULeuven vind je <a target="_blank" rel="noopener noreferrer" href="https://www.kuleuven.be/studentenvoorzieningen/kot-leuven/onderverhuren">hier</a>.
              Laat zeker ook iets weten aan het <span className={classes.bold}>onthaal</span>, zij krijgen ook soms aanvragen binnen.
              Als je de huurovereenkomst voor onderverhuring (zie vorige link) hebt opgesteld, geef dan een kopie aan het onthaal.
              Zij hebben zo ook direct alle informatie van de onderhuurder. 
            </Typography>
        }
      />
  );
}

Subrent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Subrent);
