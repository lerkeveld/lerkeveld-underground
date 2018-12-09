import React from 'react';
import indigo from '@material-ui/core/colors/indigo';
import Smartphone from '@material-ui/icons/Smartphone';

import DefaultCard from '../DefaultCard';


function PhoneCard(props) {
  return (
      <DefaultCard
        avatarIcon={<Smartphone />}
        avatarColor={indigo[500]}
        name="Telefoon"
        textValue="0000 00 00 00"
        disabled
      />
  );
}

export default PhoneCard;
