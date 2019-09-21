import common from '@material-ui/core/colors/common';
import { makeStyles } from '@material-ui/core/styles';

const white = common.white;

const useSidebarHeaderStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
    color: white
  },
  title: {
    color: white
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      maxHeight: '48px'
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: '56px'
    }
  }
}));

export default useSidebarHeaderStyles;
