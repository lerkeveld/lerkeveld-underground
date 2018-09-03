import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  disablePadding: {
    padding: "0px"
  }
});

function DefaultPanel(props) {
  const { classes, title, details, disablePadding } = props;
  return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} >{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={disablePadding ? classes.disablePadding : null}>
          {details}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

DefaultPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultPanel);
