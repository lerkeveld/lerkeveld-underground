import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import MaterialRulesDialog from './MaterialRulesDialog';
import MaterialSelect from './MaterialSelect';
import MaterialDatePicker from './MaterialDatePicker';


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
    this.setState({dateChosen: true})
  }

  handleSubmit = event => {
    this.setState({dialogOpen: true});
    event.preventDefault();
  }

  handleDialogAccept = () => {
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
                     onChange={this.handleChange('items').bind(this)}
                  />
                : null
            }
          </form>
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
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                : <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="button"
                    onClick={this.handleNextButton}
                  >
                    Next
                  </Button>
            }
          </div>
          <MaterialRulesDialog
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept.bind(this)}
            onClose={this.handleDialogChange(false).bind(this)}
          />
        </React.Fragment>
    );
  }
}

MaterialReservationCard.propTypes = {
  reservations: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired
};

MaterialReservationCard.defaultProps = {
  reservations: [],
  material: []
}

export default MaterialReservationCard;
