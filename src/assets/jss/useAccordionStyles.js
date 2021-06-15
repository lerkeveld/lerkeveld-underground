import { makeStyles } from '@material-ui/core/styles';

const useExpansionPanelStyles = makeStyles(theme => ({
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  disablePadding: {
    padding: "0px"
  }
}));

export default useExpansionPanelStyles;
