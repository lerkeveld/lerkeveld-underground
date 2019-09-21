import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import useBoldStyles from '../../../assets/jss/useBoldStyles';


function CantusPanel(props) {
    const classes = useBoldStyles();

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

export default CantusPanel;
