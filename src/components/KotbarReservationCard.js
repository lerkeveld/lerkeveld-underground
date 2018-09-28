import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Typography, Button, InputAdornment, IconButton } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import KotbarRulesDialog from '../components/KotbarRulesDialog';

class KotbarReservationCard extends React.Component {

  state = {
    date: new Date(),
    description: '',
    dialogOpen: false
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  }

  handleDateChange = value => {
    this.setState({date: value});
  }

  handleDialogAccept = () => {
    console.log('accept');
    this.setState({dialogOpen: false});
  }

  handleDialogChange = (dialogOpen) => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations } = this.props;

    let maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 4);

    const dates = reservations.map(x => x.date);
    const shouldDisableDate = (date) => {
        return dates.some(taken => {
            return date.getDate()  === taken.getDate() &&
                   date.getMonth() === taken.getMonth() &&
                   date.getYear()  === taken.getYear();
        });
    }

    return (
        <React.Fragment>
          <Typography variant="body2" gutterBottom>
            Nieuwe reservatie
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <DatePicker
                label="Datum"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleDateChange.bind(this)}
                value={this.state.date}
                disablePast
                maxDate={maxDate}
                shouldDisableDate={shouldDisableDate}
                format='dd/MM/yyyy'
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                                  <IconButton><Event /></IconButton>
                                </InputAdornment>
                }}
                leftArrowIcon={<KeyboardArrowLeft />}
                rightArrowIcon={<KeyboardArrowRight />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Beschrijving"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange('description').bind(this)}
                value={this.state.description}
              />
            </Grid>
            <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {this.handleDialogChange(true)}}
            >
              Submit
            </Button>
            </Grid>
          </Grid>
        <KotbarRulesDialog
          open={this.state.dialogOpen}
          onAccept={this.handleDialogAccept.bind(this)}
          onClose={() => {this.handleDialogChange(false)}}
        />
        </React.Fragment>
    );
  }
}

KotbarReservationCard.propTypes = {
  reservations: PropTypes.array.isRequired,
};

KotbarReservationCard.defaultProps = {
  reservations: []
}

export default KotbarReservationCard;
