const headerStyle = (theme) => ({
  title: {
    flex: 1,
    color: 'inherit'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'inherit'
  },
  actionButton: {
    height: '24px',
    width: '24px',
    color: 'inherit',
  },
  name: {
    color: 'inherit'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('lg')]: {
      position: 'fixed',
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute'
    }
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

export default headerStyle;
