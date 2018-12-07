import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import infoPanelStyle from '../../../assets/jss/infoPanelStyle';


function DrivePanel(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Hoe kan ik de Lerkeveld Drive toevoegen?"
        details={
            <Typography variant="body2">
              Op de Google Drive van Lerkeveld slaat elke werkgroep van het praesidium documenten op die ze gebruiken doorheen het jaar.
              Alle <span className={classes.bold}>praesidiumleden</span> hebben via deze <a target="_blank" rel="noopener noreferrer" href="/drive/">link</a> toegang tot de Lerkeveld Drive.
              Contacteer de praeses, vice of IT praeses als je geen toegang hebt.
            </Typography>
        }
      />
  );
}

DrivePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(infoPanelStyle)(DrivePanel);
