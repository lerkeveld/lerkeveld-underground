import { makeStyles } from '@material-ui/core/styles';

const useBoldStyles = makeStyles(theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  }
}));

export default useBoldStyles;
