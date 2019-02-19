import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingButton from '../../components/LoadingButton';

import * as api from '../../api';


class EditPrivacyForm extends React.Component {

  state = {
    checked: false,
    snackbarOpen: false,
    messageInfo: {},
    submitting: false
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

  handleCheckedState = event => {
    this.setState({checked: event.target.checked});
  }

  doEdit = () => {
    api.post({
        path: '/user/edit',
        data: {
            is_sharing: this.state.checked
        }
    }).then(data => {
        this.props.history.push('/profiel');
    }).catch(error => {
        if (error === null) return;
        this.setState(
            {submitting: false},
            () => this.showMessage(error.message)
        );
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({snackbarOpen: false, submitting: true}, this.doEdit);
  }

  render() {
    const ProfileLink = props => <Link to="/profiel" {...props} />;

    return (
        <React.Fragment>
          <Typography variant="subtitle2">
            Wijzig privacy settings
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked disabled />}
                label="Ik deel mijn voor- en achternaam met alle Lerkies"
              />
              <FormControlLabel
                control={<Checkbox checked disabled />}
                label="Ik deel mijn kamernummer en gang met alle Lerkies"
              />
              <FormControlLabel
                control={<Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckedState}
                />}
                label="Ik deel mijn contactgegevens met alle Lerkies"
              />
            </FormGroup>
            <div style={{marginTop: '8px', display: 'flex'}}>
              <LoadingButton
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                style={{marginRight: "8px"}}
                loading={this.state.submitting}
              >
                Submit
              </LoadingButton>
              <Button
                color="primary"
                size="small"
                component={ProfileLink}
              >
                Back
              </Button>
            </div>
          </form>
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

export default withRouter(EditPrivacyForm);
