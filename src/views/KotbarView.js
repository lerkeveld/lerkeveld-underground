import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';

function KotbarView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          Kotbar
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainSubHeader}>
          Reserveer hier de kotbar!
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainTitle}>
          Card nieuwe reservatie (datum, activiteit, accepteer kotbar rules).
          On click kotbar rules: dialog met kotbar rules / verwijzing naar info.
          On submit: refresh card reservaties.
          <br />
          Eronder Card reservaties met lijst: datum, verantwoordelijke, activiteit.
        </Typography>
      </main>
  );
}

KotbarView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(KotbarView);
