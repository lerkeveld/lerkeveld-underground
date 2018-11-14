import React from 'react';
import red from '@material-ui/core/colors/red';
import AccountCircle from '@material-ui/icons/AccountCircle';

import DefaultCard from './DefaultCard';

function NameCard(props) {
  return (
      <DefaultCard
        avatarIcon={<AccountCircle />}
        avatarColor={red[500]}
        name="Naam"
        textValue="Test Test"
        disabled
      />
  );
}

export default NameCard;
