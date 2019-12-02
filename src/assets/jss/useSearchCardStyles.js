import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useSearchCardStyles = makeStyles(theme => ({
  subheader: {
    fontWeight: theme.typographyfontWeightMedium
  },
  cardHeaderRoot: {
    padding: '14px 16px 14px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: grey[100]
    }
  },
  cardHeaderTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: theme.typography.fontWeightMedium
  },
  cardHeaderSubTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: theme.typography.fontWeightRegular
  },
  cardHeaderContent: {
      overflow: 'hidden',
  }
}));

export default useSearchCardStyles;
