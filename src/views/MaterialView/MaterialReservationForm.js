import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import MaterialRulesDialog from './MaterialRulesDialog';
import MaterialSelect from './MaterialSelect';
import MaterialDatePicker from './MaterialDatePicker';


class MaterialReservationForm extends React.Component {

  state = {
    date: new Date(),
    items: [],
    errors: {
      items: false
    },
    dateChosen: false,
    dialogOpen: false,
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

  handleBackButton = () => {
    this.setState({dateChosen: false, items: []});
  }

  handleSubmit = event => {
    event.preventDefault();

    // next button
    if (!this.state.dateChosen) {
        this.setState({dateChosen: true});
        return true;
    }

    // check errors
    const errors = {};
    if (this.state.items.length === 0)
        errors.items = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({dialogOpen: true});
  }

  handleDialogAccept = () => {
    // TODO api:material:reserve
    console.log('accept');
    this.setState({dialogOpen: false});
  }

  handleDialogChange = dialogOpen => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations, material } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit}>
            <MaterialDatePicker
              disabled={this.state.dateChosen}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
            />
            { this.state.dateChosen
                ? <MaterialSelect
                     reservations={reservations}
                     material={material}
                     items={this.state.items}
                     date={this.state.date}
                     onChange={this.handleRequiredChange('items').bind(this)}
                     error={this.state.errors.items}
                  />
                : null
            }
            <div style={{marginTop: '8px'}}>
              <Button
                disabled={!this.state.dateChosen}
                variant="contained"
                size="small"
                onClick={this.handleBackButton}
                style={{marginRight: "8px"}}
              >
                Back
              </Button>
              { this.state.dateChosen
                  ? <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Submit
                    </Button>
                  : <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Next
                    </Button>
              }
            </div>
          </form>
          <MaterialRulesDialog
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept.bind(this)}
            onClose={this.handleDialogChange(false).bind(this)}
          />
        </React.Fragment>
    );
  }
}

MaterialReservationForm.propTypes = {
  reservations: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired
};

MaterialReservationForm.defaultProps = {
  reservations: [],
  material: []
}

export default MaterialReservationForm;
