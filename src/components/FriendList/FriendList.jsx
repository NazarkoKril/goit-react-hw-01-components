import React from 'react';
import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import { List } from './FriendList.styled.js';
const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (<FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />)
            })}
        </List>
    );
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.string.isRequired,
            id:PropTypes.string.isRequired,
        })
    )
}

export default FriendList;