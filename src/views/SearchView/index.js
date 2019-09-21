import React, {useState, useCallback} from 'react';
import SearchBar from 'material-ui-search-bar';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMore from '@material-ui/icons/ExpandMore';

import SearchCard from './SearchCard';
import SearchDialog from './SearchDialog';

import useViewStyles from '../../assets/jss/useViewStyles';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useFetch from '../../hooks/useFetch';
import * as utils from '../../utils';


function SearchView(props) {
    const classes = useViewStyles();

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [displayLimit, setDisplayLimit] = useState(30);
    const [disabled, setDisabled] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);

    // FETCHING
    const fetchRequest = useFetch(
        {method: 'GET', path: '/user/all'},
        useCallback((data) => {
            const fullName = u => u['first_name'] + u['last_name'];
            const sortedUsers = utils.sorted(data.users, fullName);
            setUsers(sortedUsers);
            setFilteredUsers(sortedUsers);
            setDisabled(false);
        }, []),
    )

    useLoadingSnackbar(fetchRequest.isFetching);
    useEnqueueSnackbar(fetchRequest.errorMessage);

    // HELPER FUNCTIONS
    const onSearchInput = (query) => {
      const keywords = query.split(' ').map(keyword => keyword.toLowerCase());
      const fields = ['first_name', 'last_name'];
      const filteredUsers = users.filter(user => {
          return keywords.every(keyword => {
              return fields.some(field => {
                  return user[field].split(' ').some(part => {
                      return part.toLowerCase().indexOf(keyword) === 0;
                  });
              });
          });
      });
      setDisplayLimit(30);
      setFilteredUsers(filteredUsers);
    }

    const onSelectUser = (user) => () => {
        setSelectedUser(user);
        setDialogOpen(true);
    }

    const onDialogClose = () => {
        setDialogOpen(false);
    }

    const onLoadMore = () => {
        setDisplayLimit(displayLimit + 30);
    }

    const onCancelSearch = () => {
        setDisplayLimit(30);
        setFilteredUsers(users);
    }

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            Zoek Lerkie
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Privacy settings zijn aanpasbaar in je profiel.
          </Typography>
          <Grid container spacing={2} style={{paddingBottom: '16px'}}>
            <Grid item xs={12} md={4}>
              <SearchBar
                onChange={onSearchInput}
                onCancelSearch={onCancelSearch}
                cancelOnEscape={true}
                disabled={disabled}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {
              filteredUsers.slice(0, displayLimit).map(user => {
                return <Grid key={user.id} item xs={12} sm={6} md={4}>
                         <SearchCard
                           user={user}
                           onClick={onSelectUser(user)}
                         />
                       </Grid>;
              })
            }
          </Grid>
          { displayLimit < filteredUsers.length
              ? <div style={{textAlign: "center", marginTop: "16px"}}>
                  <IconButton onClick={onLoadMore} title="Load More">
                    <ExpandMore />
                  </IconButton>
                </div>
              : null
          }
          <SearchDialog
            open={dialogOpen}
            user={selectedUser}
            onClose={onDialogClose}
          />
        </main>
    );
}

export default SearchView;
