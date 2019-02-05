import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import boldStyle from '../../../assets/jss/boldStyle';


function DefectsPanel(props) {
  const { classes } = props;
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

DefectsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(boldStyle)(DefectsPanel);
