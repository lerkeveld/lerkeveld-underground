import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import loadingButtonStyle from '../../assets/jss/loadingButtonStyle';


const progressSizes = {
  'small': 19,
  'medium': 24,
  'large': 33
}

function LoadingButton(props) {
  const { classes, children, loading, size, ...rest } = props;
  const progressSize = progressSizes[size] || 24;

  return (
        <div className={classes.wrapper}>
          <Button
            size={size}
            disabled={loading}
            disableRipple
            {...rest}
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

export default withStyles(loadingButtonStyle)(LoadingButton);
