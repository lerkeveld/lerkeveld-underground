import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../../assets/jss/viewStyle';

import CalendarPanel from './panels/CalendarPanel';
import CantusPanel from './panels/CantusPanel';
import DefectsPanel from './panels/DefectsPanel';
import DrivePanel from './panels/DrivePanel';
import LostKeyPanel from './panels/LostKeyPanel';
import PrivacyPanel from './panels/PrivacyPanel';
import ReceptionHoursPanel from './panels/ReceptionHoursPanel';
import SubrentPanel from './panels/SubrentPanel';

import ContactAllLerkiesPanel from './panels/ContactAllLerkiesPanel';
import ContactAllPraesidiumPanel from './panels/ContactAllPraesidiumPanel';
import ContactExLerkiesPanel from './panels/ContactExLerkiesPanel';
import ContactLerkeveldPanel from './panels/ContactLerkeveldPanel';


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
        <div style={{paddingBottom: "24px"}}>
          <ReceptionHoursPanel />
          <LostKeyPanel />
          <DefectsPanel />
          <CantusPanel />
          <SubrentPanel />
          <CalendarPanel />
          <DrivePanel />
          <PrivacyPanel />
        </div>
        <Typography variant="h5" className={classes.mainTitle}>
          Contact
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
          Hoe kan ik ... bereiken?
        </Typography>
        <div>
          <ContactLerkeveldPanel />
          <ContactAllLerkiesPanel />
          <ContactAllPraesidiumPanel />
          <ContactExLerkiesPanel />
        </div>
      </main>
  );
}

InfoView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(InfoView);
