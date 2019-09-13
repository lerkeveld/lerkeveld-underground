import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

function PrivacyPanel(props) {
  return (
      <DefaultPanel
        title="Waar kan ik de privacy policy van deze website lezen?"
        details={
            <Typography variant="body2">
                Klik <a target="_blank" rel="noopener noreferrer" href="/privacy_policy.pdf">hier</a> om de privacy policy te lezen.
            </Typography>
        }
      />
  );
}

export default PrivacyPanel;
