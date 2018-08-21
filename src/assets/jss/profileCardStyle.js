const profileCardStyle = theme => ({
  subheader: {
    fontWeight: theme.typographyfontWeightMedium
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
  }
});

export default profileCardStyle;
