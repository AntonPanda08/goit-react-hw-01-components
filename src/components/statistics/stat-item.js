import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const StatisticItem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: randColor() }} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  stat: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
export default StatisticItem;
