import React from 'react';
import PropTypes from 'prop-types';

import { ListItem1, Status1 } from './FriendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem1>
            <Status1 status={isOnline}></Status1>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
            
        </ListItem1>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

