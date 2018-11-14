import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EventCard from '../components/EventCard';
import viewStyle from '../assets/jss/viewStyle';

class DashboardView extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="headline" className={classes.mainTitle}>
            Evenementen
          </Typography>
          <Typography variant="body1" paragraph className={classes.mainSubHeader}>
            Deze evenementen staan ons te wachten!
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <EventCard
                title="Schaatsen!"
                date="December 6, 2017"
                link="http://www.facebook.com/events/129905701119868/"
                img="/uploads/408b57d696863e346310d75fe4c663ee.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <EventCard
                title="The Final Countdown"
                date="Mei 16, 2018"
                link="http://www.facebook.com/events/180291829230157/"
                img="/uploads/6308fa04465cc4b89d0b0a0e9e6b8a7f.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <EventCard
                title="Finaledag Gangvoetbal"
                date="Mei 23, 2018"
                link="https://www.facebook.com/events/176009919659127/"
                img="/uploads/9f9ef7b359fe1d9581a48ebe17164384.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <EventCard
                title="Spikeball en Kubbtornooi en yoloswag veel andere toffe activitetien"
                date="Mei 1, 2018"
                link="https://www.facebook.com/events/374497933049938/"
                img="/uploads/311f2e514de2638e99204c5124d6b0fb.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <EventCard
                title="StreekbierenBBQ"
                date="Mei 9, 2018"
                link="https://www.facebook.com/events/986339821517716/"
                img="/uploads/4c38e148912d44bd58f98269022525d9.jpg"
              />
            </Grid>
          </Grid>
        </main>
    );
  }
}

DashboardView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(DashboardView);
