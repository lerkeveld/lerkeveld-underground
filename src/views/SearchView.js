import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMore from '@material-ui/icons/ExpandMore';

import viewStyle from '../assets/jss/viewStyle';
import SearchCard from '../components/SearchCard';
import SearchDialog from '../components/SearchDialog';
import data from '../data.js';

class SearchView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialUsers: 'searches' in data ? data['searches'] : [],
      displayLimit: 30,
      dialogOpen: false,
      selectedUser: {}
    }
    this.state.users = this.state.initialUsers;
  }

  onSelectUser(user) {
    this.setState({
        selectedUser: user,
        dialogOpen: true
    })
  }

  onDialogClose() {
    this.setState({
        dialogOpen: false,
    });
  }

  onLoadMore() {
    this.setState({
        displayLimit: this.state.displayLimit + 30,
    });
  }

  onCancelSearch() {
    this.setState({displayLimit: 30, users: this.state.initialUsers});
  }

  onSearch(query) {
    const keywords = query.split(' ').map(keyword => keyword.toLowerCase());
    const fields = ['firstName', 'lastName'];
    const users = this.state.initialUsers.filter(user => {
        return keywords.every(keyword => {
            return fields.some(field => {
                return user[field].split(' ').some(part => {
                    return part.toLowerCase().indexOf(keyword) === 0;
                });
            });
        });
    });
    this.setState({displayLimit: 30, users: users});
  }

  render() {
    const { classes } = this.props;
    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            Zoek Lerkie
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Privacy settings zijn aanpasbaar in je profiel.
          </Typography>
          <Grid container spacing={16} style={{paddingBottom: '16px'}}>
            <Grid item xs={12} md={4}>
              <SearchBar
                onChange={this.onSearch.bind(this)}
                onCancelSearch={this.onCancelSearch.bind(this)}
                cancelOnEscape={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            {
              this.state.users.slice(0, this.state.displayLimit).map(user => {
                const key = JSON.stringify(user);
                return <Grid key={key} item xs={12} sm={6} md={4}>
                         <SearchCard
                           user={user}
                           onClick={this.onSelectUser.bind(this, user)}
                         />
                       </Grid>;
              })
            }
          </Grid>
          {
            this.state.displayLimit < this.state.users.length &&
            <div style={{textAlign: "center", marginTop: "16px"}}>
              <IconButton onClick={this.onLoadMore.bind(this)} title="Load More">
                <ExpandMore />
              </IconButton>
            </div>
          }
          <SearchDialog
            open={this.state.dialogOpen}
            user={this.state.selectedUser}
            onClose={this.onDialogClose.bind(this)}
          />
        </main>
    );
  }
}

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(SearchView);
