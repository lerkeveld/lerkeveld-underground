import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import infoPanelStyle from '../../../assets/jss/infoPanelStyle';


function CantusPanel(props) {
  const { classes } = props;
  return (
      <DefaultPanel
        title="Zijn privé-cantussen toegelaten op Lerkeveld?"
        details={
            <Typography variant="body2">
              Allereerst mogen geen cantussen doorgaan in de kotbar.
              Daarnaast is een cantus met <span className={classes.bold}>hoofdzakelijk externen niet toegelaten</span> op Lerkeveld.
              Met een groepje Lerkies, zoals bv. met je gang, een cantus organiseren kan wel, maar dan moet de Noord of Zuid vleugel akkoord gaan (afhankelijk waar het doorgaat).
              Overleg dan even met de gangverantwoordelijken. 
            </Typography>
        }
      />
  );
}

CantusPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(infoPanelStyle)(CantusPanel);
