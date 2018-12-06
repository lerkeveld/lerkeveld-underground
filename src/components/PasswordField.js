import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKey from '@material-ui/icons/VpnKey';

class PasswordField extends React.Component {

  state = {
    showPassword: false
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { showStartAdornment, showEndAdornment, ...rest } = this.props;

    const startAdornment = showStartAdornment 
          ? <InputAdornment position="start">
              <VpnKey />
            </InputAdornment>
          : null;
    const endAdornment = showEndAdornment
          ? <InputAdornment position="end">
              <IconButton
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          : null;
    return (
        <TextField
          type={this.state.showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment
          }}
          {...rest}
        />
    );
  }
}

export default PasswordField;
