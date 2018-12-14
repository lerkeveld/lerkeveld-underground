import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import CloseIcon from '@material-ui/icons/Close';


function CloseableSnackbar(props) {
  const { message, onClose, ...rest } = props;

  return (
       <Snackbar
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'center',
         }}
         autoHideDuration={6000}
         ContentProps={{
           'aria-describedby': 'message-id',
         }}
         onClose={onClose}
         message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
         {...rest}
       />
  );
}

export default CloseableSnackbar;
