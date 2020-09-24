import React from 'react';
import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span className={friend.isOnline ? styles.online : styles.offline}>
            &#8226;
          </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
