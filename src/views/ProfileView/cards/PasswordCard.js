import React from 'react';
import green from '@material-ui/core/colors/green';
import VpnKey from '@material-ui/icons/VpnKey';

import DefaultCard from '../DefaultCard';


function PasswordCard(props) {
  const { loading } = props;
  const bullet = "\u2022";

  return (
        <DefaultCard
          loading={loading}
          avatarIcon={<VpnKey />}
          avatarColor={green[500]}
          name="Wachtwoord"
          textValue={bullet.repeat(16)}
          link="/edit/password"
        />
  );
}

export default PasswordCard;
