const authLayoutStyle = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#9b0000'
  },
  icon: {
    display: 'block',
    height: '100px',
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flex: 1,
    width: '100%',
    maxWidth: '350px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default authLayoutStyle;
