import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './stat-item';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(({ id, ...props }) => (
          <StatisticItem key={id} {...props} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default Statistics;
