import React from 'react';
import blue from '@material-ui/core/colors/blue';
import Email from '@material-ui/icons/Email';

import DefaultCard from '../DefaultCard';


function EmailCard(props) {
  const { loading, email = null } = props;

  return (
      <DefaultCard
        loading={loading}
        avatarIcon={<Email />}
        avatarColor={blue[500]}
        name="E-mailadres"
        textValue={email}
        link="/edit/email"
      />
  );
}

export default EmailCard;
