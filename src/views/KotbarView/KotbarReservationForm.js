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

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations } = this.props;

    return (
        <React.Fragment>
          <form>
            <KotbarDatePicker
              reservations={reservations}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
            />
            <TextField
              label="Beschrijving"
              fullWidth
              required
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleChange('description')}
              value={this.state.description}
            />
            <div style={{marginTop: '8px'}}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={this.handleDialogChange(true)}
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
