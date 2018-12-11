import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import KotbarDatePicker from './KotbarDatePicker';
import KotbarRulesDialog from './KotbarRulesDialog';


class KotbarReservationForm extends React.Component {

  state = {
    date: new Date(),
    description: '',
    errors: {
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
    this.setState({date: value});
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.description.length === 0)
        errors.description = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({dialogOpen: true});
  }

  handleDialogAccept = () => {
    // TODO api:kotbar:reserve
    this.setState({dialogOpen: false});
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit}>
            <KotbarDatePicker
              reservations={reservations}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
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
