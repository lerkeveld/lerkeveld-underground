import React from 'react';
import { teal } from '@material-ui/core/colors';
import { PriorityHigh } from '@material-ui/icons';

import DefaultCard from './DefaultCard';

function HomeTelephoneCard(props) {
  return (
      <DefaultCard
        avatarIcon={<PriorityHigh />}
        avatarColor={teal[500]}
        name="Telefoon (Thuis)"
        textValue="000 00 00 00"
        disabled
      />
  );
}

export default HomeTelephoneCard;
