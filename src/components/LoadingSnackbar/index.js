import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';

import loadingSnackbarStyle from '../../assets/jss/loadingSnackbarStyle';


function LoadingSnackbar(props) {
  const { classes, open, ...rest } = props;

  return (
       <Snackbar
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
         }}
         open={open}
         TransitionComponent={Fade}
         TransitionProps={{
             in: open,
             style: {
                 transitionDelay: open ? '800ms' : '0ms'
             },
             unmountOnExit: true
         }}
         ContentProps={{
           'aria-describedby': 'snackbar-message',
         }}
         message={
             <span id="snackbar-message" className={classes.wrapper}>
               <CircularProgress
                 className={classes.progress}
                 color="inherit"
                 size={25}
               />
               Loading ...
             </span>
         }
         {...rest}
       />
  );
}

export default withStyles(loadingSnackbarStyle)(LoadingSnackbar);
