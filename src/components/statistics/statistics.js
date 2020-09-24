import React from 'react';
import statisticalData from '../../statistical-data.json';
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
        {statisticalData.map(stats => (
          <li
            style={{ backgroundColor: randColor() }}
            className={styles.item}
            key={stats.id}
          >
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Statistics;
