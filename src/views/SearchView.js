import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import viewStyle from '../assets/jss/viewStyle';

import SearchCard from '../components/SearchCard';

import data from '../data.js';

class SearchView extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="headline" className={classes.mainTitle}>
            Zoek Lerkie
          </Typography>
          <Typography variant="body1" paragraph className={classes.mainSubHeader}>
            Privacy settings zijn aanpasbaar in je profiel.
          </Typography>
          <Grid container spacing={16} style={{paddingBottom: '16px'}}>
            <Grid item xs={12} md={4}>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            {
              data['searches'].map(user => {
                const key = JSON.stringify(user);
                return <Grid key={key} item xs={12} sm={6} md={4}>
                         <SearchCard
                           firstName={user['firstName']}
                           lastName={user['lastName']}
                           room={user['room']}
                           corridor={user['corridor']}
                         />
                       </Grid>;
              })
            }
          </Grid>
        </main>
    );
  }
}

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(SearchView);
