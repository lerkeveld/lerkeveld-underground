import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';

import infoPanels from '../components/infoPanels';

function InfoView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          FAQ
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainSubHeader}>
          Stuur jouw vaak gestelde vraag naar it@lerkies.studentenweb.org!
        </Typography>
        <Typography variant="subheading" paragraph className={classes.mainTitle}>
          Zelfde layout als <a href='http://lerkies.studentenweb.org/info' target='_blank' rel='noopener noreferrer'>http://lerkies.studentenweb.org/info</a> met
          Material UI expansion panels: <a href='http://lerkies.studentenweb.org/info' target='_blank' rel='noopener noreferrer'>https://material-ui.com/demos/expansion-panels/</a>.
          <br />
          Zet alle componenten in components/info/, exported in de orde in components/info/index.js. 
          <br />
          We zetten geen gsm nummers van Walter en Inge in de info, dit is privé.
          <br />
          We zetten wél de Lerkeveld kalender publiek. (Mensen die hieraan willen geraken kunnen ook altijd anderen contacteren etc. het is al publiek)
        </Typography>
        {infoPanels}
      </main>
  );
}

InfoView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(InfoView);
