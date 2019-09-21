import { makeStyles } from '@material-ui/core/styles';

const useProfileCardStyles = makeStyles(theme => ({
  subheader: {
    fontWeight: theme.typographyfontWeightMedium
  },
  cardHeaderRoot: {
    padding: '14px 16px 14px 16px'
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
      fontWeight: theme.typography.fontWeightRegular,
  },
  cardHeaderContent: {
      overflow: 'hidden',
  },
  blur: {
      color: 'transparent',
      textShadow: '0 0 5px rgba(0,0,0,0.5)'
  }
}));

export default useProfileCardStyles;
