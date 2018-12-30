import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import CloseableSnackbar from '../../components/CloseableSnackbar';

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
    snackbarOpen: false,
    messageInfo: {}
  }

  showMessage = (message) => {
      this.setState({
          snackbarOpen: true,
          messageInfo: {
              key: new Date().getTime(),
              message: message
          }
      });
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
        const newState = {
          date: null,
          items: [],
          errors: {
            date: false,
            items: false
          },
          dateChosen: false,
          dialogOpen: false,
          snackbarOpen: true,
          messageInfo: {
              key: new Date().getTime(),
              message: 'Materiaal gereserveerd'
          }
        }
        this.setState(newState, this.props.refresh);
    }).catch(error => {
        this.showMessage(error.message);
    })
  }

  handleDialogAccept = () => {
    this.setState({snackbarOpen: false}, this.doReserve);
  }

  handleDialogChange = dialogOpen => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render() {
    const { reservations, items, refresh, ...rest } = this.props;

    return (
        <React.Fragment>
          <form noValidate onSubmit={this.handleSubmit} {...rest}>
            <MaterialDatePicker
              disabled={this.state.dateChosen}
              onChange={this.handleDateChange.bind(this)}
              value={this.state.date}
              error={this.state.errors.date}
            />
            { this.state.dateChosen
                ? <MaterialSelect
                     reservations={reservations}
                     select={items}
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
          <CloseableSnackbar
            key={this.state.messageInfo.key}
            message={this.state.messageInfo.message}
            open={this.state.snackbarOpen}
            onClose={this.handleSnackbarClose}
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
