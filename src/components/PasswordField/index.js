import React, { useState } from 'react';
import TextField from '../../wrappers/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKey from '@material-ui/icons/VpnKey';


function PasswordField({
    showStartAdornment,
    showEndAdornment,
    ...rest
}) {
    const [isVisible, setVisible] = useState(false);

    const startAdornment = showStartAdornment 
          ? <InputAdornment position="start">
              <VpnKey />
            </InputAdornment>
          : null;
    const endAdornment = showEndAdornment
          ? <InputAdornment position="end">
              <IconButton
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          : null;
    return (
        <TextField
          type={isVisible ? "text" : "password"}
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment
          }}
          {...rest}
        />
    );
}

export default PasswordField;
