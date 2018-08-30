import grey from '@material-ui/core/colors/grey';


const searchCardStyle = theme => ({
  subheader: {
    fontWeight: theme.typographyfontWeightMedium
  },
  cardHeaderRoot: {
    padding: '12px 16px 12px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: grey[100]
    }
  },
  cardHeaderTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
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
});

export default searchCardStyle;
