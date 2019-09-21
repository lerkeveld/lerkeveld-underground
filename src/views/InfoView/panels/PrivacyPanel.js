import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

import DefaultPanel from '../DefaultPanel';

function PrivacyPanel(props) {
    return (
        <DefaultPanel
          title="Waar kan ik de privacy policy van deze website lezen?"
          details={
              <Typography variant="body2">
                  Klik <Link target="_blank" rel="noopener noreferrer" to="/privacy_policy.pdf">hier</Link> om de privacy policy te lezen.
              </Typography>
          }
        />
    );
}

export default PrivacyPanel;
