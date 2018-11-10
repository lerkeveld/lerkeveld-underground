import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button, InputAdornment, IconButton } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import MaterialRulesDialog from '../components/MaterialRulesDialog';

class MaterialReservationCard extends React.Component {

  state = {
    date: new Date(),
    description: '',
    items: [],
    dateChosen: false,
    dialogOpen: false,
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  }

  handleDateChange = value => {
    this.setState({date: value});
  }

  handleBackButton = () => {
    this.setState({dateChosen: false, items: []});
  }

  handleNextButton = () => {
    this.setState({dateChosen: true});
  }

  handleDialogAccept = () => {
    console.log('accept');
    this.setState({dialogOpen: false});
  }

  handleDialogChange = dialogOpen => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations, names } = this.props;

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
                disabled={this.state.dateChosen}
                label="Datum"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleDateChange}
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
            { this.state.dateChosen ? 
                <Grid item xs={12}>
                  <FormControl fullWidth disabled={!this.state.dateChosen}>
                    <InputLabel shrink htmlFor="select-multiple">Materiaal</InputLabel>
                    <Select
                      multiple
                      value={this.state.items}
                      onChange={this.handleChange('items')}
                      input={<Input id="select-multiple" />}
                    >
                      {names.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              :
                null
            }
            <Grid item xs={12}>
              <Button
                disabled={!this.state.dateChosen}
                variant="contained"
                size="small"
                onClick={this.handleBackButton}
                style={{marginRight: "8px"}}
              >
                Back
              </Button>
              {this.state.dateChosen ?
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={this.handleDialogChange(true)}
                  >
                    Submit
                  </Button>
                  :
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={this.handleNextButton}
                  >
                    Next
                  </Button>
              }
            </Grid>
          </Grid>
          <MaterialRulesDialog
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept}
            onClose={this.handleDialogChange(false)}
          />
        </React.Fragment>
    );
  }
}

MaterialReservationCard.propTypes = {
  reservations: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired
};

MaterialReservationCard.defaultProps = {
  reservations: [],
  names: []
}

export default MaterialReservationCard;
