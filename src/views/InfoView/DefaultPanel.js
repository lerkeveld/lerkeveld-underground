import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useExpansionPanelStyles from '../../assets/jss/useExpansionPanelStyles';


function DefaultPanel({
    title,
    details,
    disablePadding,
    ...props
}) {
    const classes = useExpansionPanelStyles();
    return (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" className={classes.heading} >{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={disablePadding ? classes.disablePadding : null}>
            {details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default DefaultPanel;
