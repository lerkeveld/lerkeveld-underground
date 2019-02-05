import React from 'react';
import teal from '@material-ui/core/colors/teal';
import PriorityHigh from '@material-ui/icons/CardMembership';

import DefaultCard from '../DefaultCard';


function MembershipCard(props) {
  const { isMember } = props;

  let textValue = undefined;
  switch (isMember) {
      case true:
          textValue = 'Lidkaart aangekocht';
          break;
      case false:
          textValue = 'Lidkaart niet gekocht';
          break;
      case null:
          textValue = 'Status unknown';
          break;
      default:
          textValue = undefined;
          break;
  }

  return (
      <DefaultCard
        avatarIcon={<PriorityHigh />}
        avatarColor={teal[500]}
        name="Lidkaart"
        textValue={textValue}
        disabled
      />
  );
}

export default MembershipCard;
