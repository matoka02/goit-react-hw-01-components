import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';

// console.log(data);

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
        ></FriendListItem>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};