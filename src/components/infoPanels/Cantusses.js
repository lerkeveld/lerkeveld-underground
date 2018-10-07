import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from './DefaultPanel';

const styles = theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function Cantusses(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Zijn privé-cantussen toegelaten op Lerkeveld?"
        details={
            <Typography>
              Allereerst mogen geen cantussen doorgaan in de kotbar.
              Daarnaast is een cantus met <span className={classes.bold}>hoofdzakelijk externen niet toegelaten</span> op Lerkeveld.
              Met een groepje Lerkies, zoals bv. met je gang, een cantus organiseren kan wel, maar dan moet de Noord of Zuid vleugel akkoord gaan (afhankelijk waar het doorgaat).
              Overleg dan even met de gangverantwoordelijken. 
            </Typography>
        }
      />
  );
}

Cantusses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cantusses);
