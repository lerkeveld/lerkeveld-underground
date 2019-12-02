import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import useLoadingButtonStyles from '../../assets/jss/useLoadingButtonStyles';


const progressSizes = {
  'small': 19,
  'medium': 24,
  'large': 33
}

function LoadingButton({
    disabled,
    loading,
    size,
    children,
    ...props
}) {
    const classes = useLoadingButtonStyles();
    const progressSize = progressSizes[size] || 24;

    return (
          <div className={classes.wrapper}>
            <Button
              size={size}
              disabled={disabled || loading}
              disableRipple
              {...props}
            >
              {children}
            </Button>
            {loading
                ? <CircularProgress
                    size={progressSize}
                    className={classes.progress}
                    style={{
                      marginTop: - progressSize / 2,
                      marginLeft: - progressSize / 2
                    }}
                  />
                : null
            }
          </div>
    );
}

export default LoadingButton;
