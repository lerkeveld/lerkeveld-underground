import { makeStyles } from '@material-ui/core/styles';

const useAuthStyles = makeStyles(theme => ({
  action: {
    marginTop: '16px',
    textAlign: 'center'
  },
  actions: {
    marginTop: '16px'
  },
  actionLeft: {
    width: '50%',
    float: 'left',
    textAlign: 'center'
  },
  actionRight: {
    width: '50%',
    float: 'right',
    textAlign: 'center'
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px'
  }
}));


export default useAuthStyles;
