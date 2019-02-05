import React from 'react';
import amber from '@material-ui/core/colors/amber';
import Settings from '@material-ui/icons/Settings';

import DefaultCard from '../DefaultCard';


function PrivacyCard(props) {
  const { isSharing } = props;

  let textValue = undefined;
  switch (isSharing) {
      case true:
          textValue = 'Deel mijn contactgegevens';
          break;
      case false:
          textValue = 'Deel mijn contactgegevens niet';
          break;
      default:
          textValue = undefined;
          break;
  }

  return (
      <DefaultCard
        avatarIcon={<Settings />}
        avatarColor={amber[500]}
        name="Privacy Settings"
        textValue={textValue}
        link="/edit/privacy"
      />
  );
}

export default PrivacyCard;
