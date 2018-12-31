import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMore from '@material-ui/icons/ExpandMore';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingSnackbar from '../../components/LoadingSnackbar';

import SearchCard from './SearchCard';
import SearchDialog from './SearchDialog';

import viewStyle from '../../assets/jss/viewStyle';
import * as api from '../../api';


class SearchView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayLimit: 30,
      dialogOpen: false,
      selectedUser: {},
      fetching: true,
      disabled: true,
      snackbarOpen: false,
      messageInfo: {}
    }
    this.state.filteredUsers = this.state.users;
  }

  showMessage = (message) => {
      this.setState({
          snackbarOpen: true,
          messageInfo: {
              key: new Date().getTime(),
              message: message
          }
      });
  }

  handleSnackbarClose = () => {
      this.setState({snackbarOpen: false});
  }

  fetchUsers = () => {
    return api.get({
        path: '/user/all'
    }).then(data => {
        const fullName = u => u['first_name'] + u['last_name'];
        const sortedUsers = data.users.sort((u1, u2) => {
            if (fullName(u1) > fullName(u2)) {return 1;}
            if (fullName(u1) < fullName(u2)) {return -1;}
            return 0;
        }
        );
        this.setState({
            users: sortedUsers,
            filteredUsers: sortedUsers,
            disabled: false,
            fetching: false
        });
    }).catch(error => {
        this.setState(
            {fetching: false},
            () => this.showMessage(error.message)
        );
    })
  }

  componentDidMount() {
    this.fetchUsers();
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
    this.setState({displayLimit: 30, filteredUsers: this.state.users});
  }

  onSearchInput(query) {
    const keywords = query.split(' ').map(keyword => keyword.toLowerCase());
    const fields = ['first_name', 'last_name'];
    const filteredUsers = this.state.users.filter(user => {
        return keywords.every(keyword => {
            return fields.some(field => {
                return user[field].split(' ').some(part => {
                    return part.toLowerCase().indexOf(keyword) === 0;
                });
            });
        });
    });
    this.setState({displayLimit: 30, filteredUsers: filteredUsers});
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
                onChange={this.onSearchInput.bind(this)}
                onCancelSearch={this.onCancelSearch.bind(this)}
                cancelOnEscape={true}
                disabled={this.state.disabled}
              />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            {
              this.state.filteredUsers.slice(0, this.state.displayLimit).map(user => {
                return <Grid key={user.id} item xs={12} sm={6} md={4}>
                         <SearchCard
                           user={user}
                           onClick={this.onSelectUser.bind(this, user)}
                         />
                       </Grid>;
              })
            }
          </Grid>
          { this.state.displayLimit < this.state.filteredUsers.length
              ? <div style={{textAlign: "center", marginTop: "16px"}}>
                  <IconButton onClick={this.onLoadMore.bind(this)} title="Load More">
                    <ExpandMore />
                  </IconButton>
                </div>
              : null
          }
          <SearchDialog
            open={this.state.dialogOpen}
            user={this.state.selectedUser}
            onClose={this.onDialogClose.bind(this)}
          />
          { this.state.fetching
              ? <LoadingSnackbar open={this.state.fetching} />
              : <CloseableSnackbar
                  key={this.state.messageInfo.key}
                  message={this.state.messageInfo.message}
                  open={this.state.snackbarOpen}
                  onClose={this.handleSnackbarClose}
                />
          }
        </main>
    );
  }
}

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(SearchView);
