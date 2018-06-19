import { drawerWidth } from './commonStyle.js';

const viewStyle = theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.default,
    maxWidth: '100%',
    [theme.breakpoints.up("lg")]: {
      marginLeft: drawerWidth,
      marginRight: 'auto',
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 4,
      paddingTop: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 3
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
