import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import useBoldStyles from '../../../assets/jss/useBoldStyles';


function LostKeyPanel(props) {
    const classes = useBoldStyles();

    return (
        <DefaultPanel
          title="Wat moet ik doen als ik mijn sleutel thuis vergeten ben?"
          details={
              <Typography variant="body2">
                Als het <span className={classes.bold}>onthaal</span> open is, kan je daar een tijdelijke reservesleutel halen.
                Het onthaal is open tot 16u30 op weekdagen en tot 18u in het weekend.
                Anders kan je broeder <span className={classes.bold}>Theo Brebels</span> bellen (016 39 84 81), of vinden op zijn kamer (Z1/048), hij brengt dan jouw reservesleutel.
              </Typography>
          }
        />
    );
}

export default LostKeyPanel;
