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

function ReceptionHours(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Wat zijn de openingsuren van het onthaal?"
        details={
            <Typography>
              Op <span className={classes.bold}>weekdagen</span> van 08u30 tot 12u15 en van 12u45 tot 16u30.
              In het <span className={classes.bold}>weekend en op feestdagen</span> van 09u00 tot 12u00 en van 14u00 tot 18u00.
            </Typography>
        }
      />
  );
}

ReceptionHours.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReceptionHours);
