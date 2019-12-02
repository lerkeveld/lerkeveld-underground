import amber from '@material-ui/core/colors/amber';
import { makeStyles } from '@material-ui/core/styles';

const contactPanelStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  star: {
    color: amber[500]
  }
}));

export default contactPanelStyle;
