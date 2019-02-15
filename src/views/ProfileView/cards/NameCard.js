import React from 'react';
import red from '@material-ui/core/colors/red';
import AccountCircle from '@material-ui/icons/AccountCircle';

import DefaultCard from '../DefaultCard';


function NameCard(props) {
  const { loading, firstName = null, lastName = null} = props;

  let textValue = null;
  if (firstName !== null && lastName !== null)
    textValue = `${firstName} ${lastName}`;

  return (
      <DefaultCard
        loading={loading}
        avatarIcon={<AccountCircle />}
        avatarColor={red[500]}
        name="Naam"
        textValue={textValue}
        disabled
      />
  );
}

export default NameCard;
