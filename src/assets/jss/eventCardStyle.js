const eventCardStyle = theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto'
  },
  cardHeaderTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
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
    height: '30px',
    width: '30px',
    color: '#000'
  }
});

export default eventCardStyle;
