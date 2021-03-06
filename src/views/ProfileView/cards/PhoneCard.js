import React from 'react';
import indigo from '@material-ui/core/colors/indigo';
import Smartphone from '@material-ui/icons/Smartphone';

import DefaultCard from '../DefaultCard';


function PhoneCard(props) {
  const { loading, phone = null } = props;

  return (
      <DefaultCard
        loading={loading}
        avatarIcon={<Smartphone />}
        avatarColor={indigo[500]}
        name="Telefoon"
        textValue={phone}
        disabled
      />
  );
}

export default PhoneCard;
