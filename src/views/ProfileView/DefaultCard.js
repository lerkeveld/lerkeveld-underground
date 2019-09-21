import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import Block from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';

import useProfileCardStyles from '../../assets/jss/useProfileCardStyles';


function DefaultCard({
    loading,
    disabled,
    name,
    link,
    avatarIcon,
    avatarColor,
    ...props
}) {
    const classes = useProfileCardStyles();

    let MyLink = undefined;
    if (link)
      MyLink = React.forwardRef((props, ref) => <Link to={link} {...props} ref={ref} />);

    const editIcon = <IconButton title="Edit" component={MyLink}><Edit /></IconButton>;
    const blockIcon = <IconButton title="Contacteer IT"><Block /></IconButton>;

    let { textValue = null } = props;
    if (textValue === null)
      textValue = "Status unknown"
    if (loading)
      textValue = <span className={classes.blur}>{'a'.repeat(16)}</span>

    return (
        <Card>
          <CardHeader
            classes={{
                root: classes.cardHeaderRoot,
                content: classes.cardHeaderContent,
                title: classes.cardHeaderTitle,
                subheader: classes.cardHeaderSubTitle
            }}
            avatar={
              <Avatar style={{"backgroundColor": avatarColor}}>
                {avatarIcon}
              </Avatar>
            }
            title={name}
            subheader={textValue}
            action={disabled ? blockIcon: editIcon}
            disabled={disabled}
          />
        </Card>
    );
}

export default DefaultCard;
