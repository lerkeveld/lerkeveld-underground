import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    progress: {
        marginRight: '16px',
    },
}));


export function LoadingSnackbarMessage(props) {
    const classes = useStyles();
    return (
        <span className={classes.wrapper}>
            <CircularProgress
              className={classes.progress}
              color="inherit"
              size={25}
            />
            Loading ...
        </span>
    )
}

export const LoadingSnackbarOptions = { 
    persist: true,
    TransitionComponent: Fade,
    TransitionProps: {
        style: {
            transitionDelay: '800ms'
        }
    },
}
