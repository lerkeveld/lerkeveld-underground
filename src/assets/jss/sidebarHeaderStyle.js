import common from '@material-ui/core/colors/common';

const white = common.white;

const sidebarHeaderStyle = (theme) => ({
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
});

export default sidebarHeaderStyle;
