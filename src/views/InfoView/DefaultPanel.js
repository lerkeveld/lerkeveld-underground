import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useAccordionStyles from '../../assets/jss/useAccordionStyles';


function DefaultPanel({
    title,
    details,
    disablePadding,
    ...props
}) {
    const classes = useAccordionStyles();
    return (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" className={classes.heading} >{title}</Typography>
          </AccordionSummary>
          <AccordionDetails className={disablePadding ? classes.disablePadding : null}>
            {details}
          </AccordionDetails>
        </Accordion>
    );
}

export default DefaultPanel;
