import React from 'react';
import orange from '@material-ui/core/colors/orange';
import LocationOn from '@material-ui/icons/LocationOn';

import DefaultCard from '../DefaultCard';


function LocationCard(props) {
  const { corridor, room } = props;

  let textValue = undefined;
  if (corridor !== undefined && room !== undefined)
    textValue = `${corridor}/${room.toString().padStart(4,'0')}`;

  return (
      <DefaultCard
        avatarIcon={<LocationOn />}
        avatarColor={orange[500]}
        name="Locatie"
        textValue={textValue}
        disabled
      />
  );
}

export default LocationCard;
