import { drawerWidth } from './commonStyle.js';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles(theme => ({
  drawerPaper: {
    [theme.breakpoints.up('lg')]: {
      position: 'fixed',
    },
    width: drawerWidth,
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      minHeight: '48px'
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: '56px'
    }
  }
}));

export default useSidebarStyles;
