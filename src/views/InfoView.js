import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../assets/jss/viewStyle';

import infoPanels from '../components/infoPanels';

function InfoView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.mainTitle}>
          FAQ
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
          Stuur jouw vaak gestelde vraag naar Lerkeveld IT!
        </Typography>
        <div>
        {
          Array.from(infoPanels).map((obj) => {
            return <obj.panel key={obj.key} />;
          })
        }
        </div>
      </main>
  );
}

InfoView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(InfoView);
