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

function LostKey(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Wat moet ik doen als ik mijn sleutel thuis vergeten ben?"
        details={
            <Typography>
              Als het <span className={classes.bold}>onthaal</span> open is, kan je daar een tijdelijke reservesleutel halen.
              Het onthaal is open tot 16u30 op weekdagen en tot 18u in het weekend.
              Anders kan je pater <span className={classes.bold}>Walter Ceyssens</span> bellen, hij brengt dan jouw reservesleutel. 
            </Typography>
        }
      />
  );
}

LostKey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LostKey);
