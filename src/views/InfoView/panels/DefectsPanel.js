import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import useBoldStyles from '../../../assets/jss/useBoldStyles';


function DefectsPanel(props) {
  const classes = useBoldStyles();
  return (
      <DefaultPanel
        title="Wat moet ik doen als iets in mijn kamer defect is?"
        details={
            <Typography variant="body2">
              Stuur bij technische defecten in je kamer of een andere plaats op Lerkeveld een email naar de <span className={classes.bold}>technische dienst</span> (tent.ftc@gmail.com) met de <span className={classes.bold}>directeur</span> (direkteur.ftc@gmail.com) in CC. 
            </Typography>
        }
      />
  );
}

export default DefectsPanel;
