import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../../assets/jss/viewStyle';

function BreadView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.mainTitle}>
          Brood
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
          Bestel hier wekelijks jouw brood!
        </Typography>
      </main>
  );
}

BreadView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(BreadView);
