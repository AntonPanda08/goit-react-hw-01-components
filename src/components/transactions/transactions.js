import React from 'react';
import styles from './transactions.module.css';
import TransactionItem from './transaction-item';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className="tableHead">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, ...props }) => (
          <TransactionItem key={id} {...props} />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
