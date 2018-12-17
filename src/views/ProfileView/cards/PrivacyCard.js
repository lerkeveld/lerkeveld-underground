import React from 'react';
import amber from '@material-ui/core/colors/amber';
import Settings from '@material-ui/icons/Settings';

import DefaultCard from '../DefaultCard';
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
    const { isSharing } = this.props;

    let textValue = undefined;
    switch (isSharing) {
        case true:
            textValue = 'Deel mijn gegevens';
            break;
        case false:
            textValue = 'Deel mijn gegevens niet';
            break;
        default:
            textValue = undefined;
            break;
    }

    return (
        <div>
          <DefaultCard
            avatarIcon={<Settings />}
            avatarColor={amber[500]}
            name="Privacy Settings"
            textValue={textValue}
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
