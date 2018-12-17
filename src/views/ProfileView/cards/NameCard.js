import React from 'react';
import red from '@material-ui/core/colors/red';
import AccountCircle from '@material-ui/icons/AccountCircle';

import DefaultCard from '../DefaultCard';


function NameCard(props) {
  const { firstName, lastName } = props;

  let textValue = undefined;
  if (firstName !== undefined && lastName !== undefined)
    textValue = `${firstName} ${lastName}`;

  return (
      <DefaultCard
        avatarIcon={<AccountCircle />}
        avatarColor={red[500]}
        name="Naam"
        textValue={textValue}
        disabled
      />
  );
}

export default NameCard;
