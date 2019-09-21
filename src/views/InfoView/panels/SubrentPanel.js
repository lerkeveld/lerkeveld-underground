import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

import useBoldStyles from '../../../assets/jss/useBoldStyles';


function SubrentPanel(props) {
    const classes = useBoldStyles();

    return (
        <DefaultPanel
          title="Wat moet ik doen als ik mijn kamer voor een tijd wil onderverhuren?"
          details={
              <Typography variant="body2">
                Alle informatie rond onderverhuren bij de KULeuven vind je <a target="_blank" rel="noopener noreferrer" href="https://www.kuleuven.be/studentenvoorzieningen/kot-leuven/onderverhuren">hier</a>.
                Laat zeker ook iets weten aan het <span className={classes.bold}>onthaal</span>, zij krijgen ook soms aanvragen binnen.
                Als je de huurovereenkomst voor onderverhuring (zie vorige link) hebt opgesteld, geef dan een kopie aan het onthaal.
                Zij hebben zo ook direct alle informatie van de onderhuurder. 
              </Typography>
          }
        />
    );
}

export default SubrentPanel;
