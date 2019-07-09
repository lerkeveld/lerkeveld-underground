import { drawerWidth } from './commonStyle.js';

const viewStyle = theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.default,
    maxWidth: '1200px',
    [theme.breakpoints.up("lg")]: {
      marginLeft: drawerWidth,
      marginRight: 'auto',
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(2)
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2)
    },
  },
  mainTitle: {
  },
  mainSubHeader: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      minHeight: '48px'
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: '56px'
    }
  }
});

export default viewStyle;
