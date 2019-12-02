import { makeStyles } from '@material-ui/core/styles';

const useLoadingButtonStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative'
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

export default useLoadingButtonStyles;
