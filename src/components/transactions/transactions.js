import React from 'react';
import styles from './transactions.module.css';
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
        {items.map(({ ...props }) => (
          <TransactionItem {...props} />
        ))}
      </tbody>
    </table>
  );
}

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistory;
