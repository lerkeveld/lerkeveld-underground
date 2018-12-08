import React from 'react';
import orange from '@material-ui/core/colors/orange';
import LocationOn from '@material-ui/icons/LocationOn';

import DefaultCard from '../DefaultCard';


function LocationCard(props) {
  return (
      <DefaultCard
        avatarIcon={<LocationOn />}
        avatarColor={orange[500]}
        name="Locatie"
        textValue="N0/0000"
        disabled
      />
  );
}

export default LocationCard;