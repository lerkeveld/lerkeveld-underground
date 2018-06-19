import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';

function MaterialView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          Materiaal
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainSubHeader}>
          Reserveer hier materiaal van Lerkeveld!
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainTitle}>
          Card nieuwe reservatie (datum, select materiaal, accepteer kotbar rules).
          On click materiaal rules: dialog met materiaal rules / verwijzing naar info.
          On submit: refresh card reservaties.
          Materiaal selects zijn hard coded.
          <br />
          Eronder Card reservaties met lijst: datum, verantwoordelijke, activiteit.
        </Typography>
      </main>
  );
}

MaterialView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(MaterialView);
