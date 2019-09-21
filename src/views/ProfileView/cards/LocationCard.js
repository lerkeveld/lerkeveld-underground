import React from 'react';
import orange from '@material-ui/core/colors/orange';
import LocationOn from '@material-ui/icons/LocationOn';

import DefaultCard from '../DefaultCard';


function LocationCard(props) {
  const { loading, corridor = null, room = null } = props;

  let textValue = null;
  if (corridor !== null && room !== null)
    textValue = `${corridor}/${room}`;

  return (
      <DefaultCard
        loading={loading}
        avatarIcon={<LocationOn />}
        avatarColor={orange[500]}
        name="Locatie"
        textValue={textValue}
        disabled
      />
  );
}

export default LocationCard;
