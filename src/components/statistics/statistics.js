import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(({ ...props }) => (
          <StatisticItem {...props} />
        ))}
      </ul>
    </section>
  );
}
const StatisticItem = ({ id, label, percentage }) => {
  return (
    <li
      style={{ backgroundColor: randColor() }}
      className={styles.item}
      key={id}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
StatisticItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Statistics;
