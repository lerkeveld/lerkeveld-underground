import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from './DefaultPanel';

function ContactPanel(props) {
  return (
      <DefaultPanel
        title="Hoe kan ik ... van Lerkeveld bereiken?"
        details={
            <Typography>
              Bellen hé
            </Typography>
        }
      />
  );
}

export default ContactPanel;
