import PropTypes from 'prop-types';
import css from './Friends.module.css';
import friends from './friends.json';

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};