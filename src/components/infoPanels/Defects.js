import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from './DefaultPanel';

const styles = theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function Defects(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Wat moet ik doen als iets in mijn kamer defect is?"
        details={
            <Typography>
              Stuur bij technische defecten in je kamer of een andere plaats op Lerkeveld een email naar de <span className={classes.bold}>technische dienst</span> (tent.ftc@gmail.com) met de <span className={classes.bold}>directeur</span> (inge.zwinnen.ftc@gmail.com) in CC. 
            </Typography>
        }
      />
  );
}

Defects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Defects);
