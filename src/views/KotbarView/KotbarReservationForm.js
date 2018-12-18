import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CloseableSnackbar from '../../components/CloseableSnackbar';

import KotbarDatePicker from './KotbarDatePicker';
import KotbarRulesDialog from './KotbarRulesDialog';

import * as api from '../../api';


class KotbarReservationForm extends React.Component {

  state = {
    date: null,
    description: '',
    errors: {
      date: false,
      description: false
    },
    dialogOpen: false,
    snackbarOpen: false,
    snackbarMessage: ''
  }

  handleSnackbarClose = () => {
      this.setState({snackbarOpen: false});
  }

  handleRequiredChange = prop => event => {
    const value = event.target.value;
    const stateUpdate = {
        [prop]: value,
        errors: this.state.errors
    };
    stateUpdate.errors[prop] = value.length === 0;
    this.setState(stateUpdate);
  }

  handleDateChange = value => {
    const errors = Object.assign({}, this.state.errors, {date: false});
    this.setState({date: value, errors: errors});
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.date === null)
        errors.date = true;
    if (this.state.description.length === 0)
        errors.description = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({dialogOpen: true});
  }

  handleDialogAccept = () => {
    api.post({
        path: '/kotbar/',
        data: {
            date: this.state.date,
            description: this.state.description
        }
    }).then(data => {
        const newState = {
          date: null,
          description: '',
          errors: {
            date: false,
            description: false
          },
          dialogOpen: false,
          snackbarMessage: 'Kotbar gereserveerd',
          snackbarOpen: true
        }
        this.setState(newState, this.props.refresh);
    }).catch(error => {
        this.setState({snackbarMessage: error.message, snackbarOpen: true});
    })
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations, refresh, ...rest } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit} {...rest}>
            <KotbarDatePicker
              reservations={reservations}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
              error={this.state.errors.date}
            />
            <TextField
              label="Beschrijving"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
              required
              onChange={this.handleRequiredChange('description')}
              value={this.state.description}
              error={this.state.errors.description}
            />
            <div style={{marginTop: '8px'}}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
          <KotbarRulesDialog
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept.bind(this)}
            onClose={this.handleDialogChange(false).bind(this)}
          />
          <CloseableSnackbar
            open={this.state.snackbarOpen}
            onClose={this.handleSnackbarClose}
            message={this.state.snackbarMessage}
          />
        </React.Fragment>
    );
  }
}

KotbarReservationForm.propTypes = {
  reservations: PropTypes.array.isRequired,
};

KotbarReservationForm.defaultProps = {
  reservations: []
};

export default KotbarReservationForm;
