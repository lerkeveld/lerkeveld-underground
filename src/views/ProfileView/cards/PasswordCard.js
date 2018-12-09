import React from 'react';
import green from '@material-ui/core/colors/green';
import VpnKey from '@material-ui/icons/VpnKey';

import DefaultCard from '../DefaultCard';
import PasswordFormDialog from './PasswordFormDialog';


class PasswordCard extends React.Component {

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
    const bullet = "\u2022";

    return (
        <div>
          <DefaultCard
            avatarIcon={<VpnKey />}
            avatarColor={green[500]}
            name="Wachtwoord"
            textValue={bullet.repeat(16)}
            onClick={this.handleDialogOpen}
          />
          <PasswordFormDialog
            dialogOpen={dialogOpen}
            handleDialogClose={this.handleDialogClose}
          />
        </div>
    );
  }
}

export default PasswordCard;
