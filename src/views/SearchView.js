import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';

function SearchView(props) {
  const { classes } = props;
  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          Zoek Lerkie
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainSubHeader}>
          Als je niet wil dat je gegevens worden gedeeld, pas je privacy settings aan in je profiel.
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainTitle}>
          1. Search bar
          <br />
          2. Cards zoals Profiel, waarbij naam en kamer in Card. Bij click: details in dialog
          <br />
          2.bis Of: Expansion panels waarbij click: details in expanded region
        </Typography>
      </main>
  );
}

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(SearchView);
