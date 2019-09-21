import React from 'react';
import amber from '@material-ui/core/colors/amber';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import useSearchCardStyles from '../../assets/jss/useSearchCardStyles';


function SearchCard(props) {
    const classes = useSearchCardStyles();
    const { user = {}, ...rest } = props;
    const { first_name = null, last_name = null, corridor = null, room = null } = user;

    let fullname = "Status unknown";
    if (first_name !== null && last_name !== null)
      fullname = `${first_name} ${last_name}`
    let loc = "Status unknown";
    if (corridor !== null && room !== null)
      loc = `${corridor}/${room}`;

    return (
        <Card {...rest}>
          <CardHeader
            classes={{
                root: classes.cardHeaderRoot,
                content: classes.cardHeaderContent,
                title: classes.cardHeaderTitle,
                subheader: classes.cardHeaderSubTitle
            }}
            avatar={
                <Avatar style={{backgroundColor: amber[100], color: amber[600]}}>
                  {first_name.length === 0 ? '' : first_name[0]}
                </Avatar>}
            title={fullname}
            subheader={loc}
          />
        </Card>
    );
}

export default SearchCard;
