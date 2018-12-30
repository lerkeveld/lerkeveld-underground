import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    dialogOpen: false
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

  doReserve = () => {
    api.post({
        path: '/kotbar/',
        data: {
            date: this.state.date,
            description: this.state.description
        }
    }).then(data => {
        const resetState = {
          date: null,
          description: '',
          errors: {
            date: false,
            description: false
          },
          dialogOpen: false
        };
        this.setState(
            resetState,
            this.props.showMessage('Kotbar gereserveerd', this.props.refresh)
        );
    }).catch(error => {
        this.props.showMessage(error.message);
    })
  }

  handleDialogAccept = () => {
    this.props.closeSnackbar(this.doReserve);
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const {
        disabled,
        reservations,
        refresh,
        showMessage,
        closeSnackbar,
        ...rest
    } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit} {...rest}>
            <KotbarDatePicker
              reservations={reservations}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
              error={this.state.errors.date}
              disabled={disabled}
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
              disabled={disabled}
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
