import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui-pickers/DatePicker';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

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

    const formatDate = (date) => {
        return date.toLocaleDateString(
            'nl-be',
            {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'}
        );
    };

    const dateToMaterial = {};
    reservations.forEach(reservation => {
        const dateFormatted = formatDate(reservation["date"]);
        dateToMaterial[dateFormatted] = reservation;
    });

    const shouldDisableMaterial = (date, material) => {
        const dateFormatted = formatDate(date);
        if (dateFormatted in dateToMaterial) {
            const reservation = dateToMaterial[dateFormatted];
            return reservation["items"].includes(material);
        }
        return false;
    };

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
                      renderValue={selected => selected.join(', ')}
                    >
                      <MenuItem disabled value="">
                        Kies Materialen:
                      </MenuItem>
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={{paddingLeft: 0}}
                          disabled={shouldDisableMaterial(this.state.date, name)}
                        >
                          <Checkbox
                            color="primary"
                            checked={this.state.items.includes(name)}
                            indeterminate={shouldDisableMaterial(this.state.date, name)}
                          />
                          <ListItemText primary={name} style={{paddingLeft: 0}}/>
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
