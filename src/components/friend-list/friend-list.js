import React from 'react';
import PropTypes from 'prop-types';
import styles from './friend-list.module.css';
import FriendItem from './friend-item';
function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, ...props }) => (
        <FriendItem key={id} {...props} />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
export default FriendList;
