import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import LoadingButton from '../../components/LoadingButton';

import MaterialRulesDialog from './MaterialRulesDialog';
import MaterialSelect from './MaterialSelect';
import MaterialDatePicker from './MaterialDatePicker';

import * as api from '../../api';


class MaterialReservationForm extends React.Component {

  state = {
    date: null,
    items: [],
    errors: {
      date: false,
      items: false
    },
    dateChosen: false,
    dialogOpen: false,
    submitting: false
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

  handleBackButton = () => {
    this.setState({
        dateChosen: false,
        items: [],
        errors: {
            items: false
        }
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    // next button
    if (!this.state.dateChosen) {
        const errors = {};
        if (this.state.date === null)
            errors.date = true;

        if (Object.keys(errors).length !== 0) {
            errors.items = false;
            this.setState({errors: errors});
            return false;
        }

        this.setState({dateChosen: true});
        return true;
    }

    // check errors
    const errors = {};
    if (this.state.items.length === 0)
        errors.items = true;

    if (Object.keys(errors).length !== 0) {
        errors.date = false;
        this.setState({errors: errors});
        return false;
    }

    this.setState({dialogOpen: true});
  }

  doReserve = () => {
    api.post({
        path: '/materiaal/',
        data: {
            date: this.state.date,
            items: this.state.items
        }
    }).then(data => {
        const resetState = {
          date: null,
          items: [],
          errors: {
            date: false,
            items: false
          },
          dateChosen: false,
          dialogOpen: false,
          submitting: false
        };
        this.setState(
            resetState,
            this.props.showMessage('Materiaal gereserveerd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
            {submitting: false},
            () => this.props.showMessage(error.message)
        );
    })
  }

  handleDialogAccept = () => {
    this.setState(
        {dialogOpen: false, submitting: true},
        () => this.props.closeSnackbar(this.doReserve)
    );
  }

  handleDialogChange = dialogOpen => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const {
        disabled,
        reservations,
        items,
        refresh,
        showMessage,
        closeSnackbar,
        ...rest
    } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit} {...rest}>
            <MaterialDatePicker
              disabled={disabled || this.state.dateChosen}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
              error={this.state.errors.date}
            />
            { this.state.dateChosen
                ? <MaterialSelect
                     disabled={disabled}
                     reservations={reservations}
                     select={items}
                     items={this.state.items}
                     date={this.state.date}
                     onChange={this.handleRequiredChange('items').bind(this)}
                     error={this.state.errors.items}
                  />
                : null
            }
            <div style={{marginTop: '8px', display: 'flex'}}>
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
                  ? <LoadingButton
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                      loading={this.state.submitting}
                    >
                      Submit
                    </LoadingButton>
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
  items: PropTypes.array.isRequired
};

MaterialReservationForm.defaultProps = {
  reservations: [],
  items: []
}

export default MaterialReservationForm;
