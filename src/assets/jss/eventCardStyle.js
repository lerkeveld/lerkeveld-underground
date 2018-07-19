const eventCardStyle = theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto'
  },
  cardHeaderRoot: {
    padding: '12px 16px 12px 16px'
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
  },
  media: {
    paddingTop: '56.25%', // 16:9
    opacity: 0.96,
    '&:hover': {
      opacity: 1
    }
  },
  icon: {
    height: '28px',
    width: '28px',
  }
});

export default eventCardStyle;
