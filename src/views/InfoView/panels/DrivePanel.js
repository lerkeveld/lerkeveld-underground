import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import useBoldStyles from '../../../assets/jss/useBoldStyles';


function DrivePanel(props) {
    const classes = useBoldStyles();

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

export default DrivePanel;
