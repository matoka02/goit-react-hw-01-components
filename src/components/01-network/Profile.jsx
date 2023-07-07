import PropTypes from 'prop-types';
// import user from './user.json';
import css from './Profile.module.css';

// console.log(user);      // object

export const Profile = ({avatar, username, tag, location, stats: {followers, views, likes}  }) => (
    <div className={css.profile}>
        <div className={css.description}>
            <img src={avatar} alt='User avatar' className={css.avatar} />
            <p className={css.profileName}>{username}</p>
            <p className={css.profileTag}>@{tag}</p>
            <p className={css.profileLocation}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.followersList}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.followersList}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.followersList}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>

);


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};