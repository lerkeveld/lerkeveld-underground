import React from 'react';
import { Settings } from '@material-ui/icons';
import amber from '@material-ui/core/colors/amber';

import DefaultCard from './DefaultCard';
import PrivacyFormDialog from './PrivacyFormDialog';

class PrivacyCard extends React.Component {

  state = {
    dialogOpen: false,
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    const { dialogOpen } = this.state;

    return (
        <div>
          <DefaultCard
            avatarIcon={<Settings />}
            avatarColor={amber[500]}
            name="Privacy Settings"
            textValue="Deel mijn gegevens niet"
            onClick={this.handleDialogOpen}
          />
          <PrivacyFormDialog
            dialogOpen={dialogOpen}
            handleDialogClose={this.handleDialogClose}
          />
        </div>
    );
  }
}

export default PrivacyCard;
