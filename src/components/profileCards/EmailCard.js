import React from 'react';
import blue from '@material-ui/core/colors/blue';
import Email from '@material-ui/icons/Email';

import DefaultCard from './DefaultCard';
import EmailFormDialog from './EmailFormDialog';

class EmailCard extends React.Component {

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
            avatarIcon={<Email />}
            avatarColor={blue[500]}
            name="E-mailadres"
            textValue="test.test@domain.com"
            onClick={this.handleDialogOpen}
          />
          <EmailFormDialog
            dialogOpen={dialogOpen}
            handleDialogClose={this.handleDialogClose}
          />
        </div>
    );
  }
}

export default EmailCard;
