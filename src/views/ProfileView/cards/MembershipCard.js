import React from 'react';
import teal from '@material-ui/core/colors/teal';
import PriorityHigh from '@material-ui/icons/CardMembership';

import DefaultCard from '../DefaultCard';


function MembershipCard(props) {
  const { loading, isMember = null } = props;

  let textValue = null;
  switch (isMember) {
      case true:
          textValue = 'Lidkaart aangekocht';
          break;
      case false:
          textValue = 'Lidkaart niet gekocht';
          break;
      default:
          textValue = null;
          break;
  }

  return (
      <DefaultCard
        loading={loading}
        avatarIcon={<PriorityHigh />}
        avatarColor={teal[500]}
        name="Lidkaart"
        textValue={textValue}
        disabled
      />
  );
}

export default MembershipCard;
