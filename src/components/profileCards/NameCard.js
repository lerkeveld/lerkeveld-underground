import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import red from '@material-ui/core/colors/red';

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
