import React from 'react';
import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ ...props }) => (
        <FriendItem {...props} />
      ))}
    </ul>
  );
}

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}>&#8226;</span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendList;
