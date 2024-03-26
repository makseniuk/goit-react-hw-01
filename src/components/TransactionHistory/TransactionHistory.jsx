import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.tableTransaction}>
      <thead className={styles.theadTransaction}>
        <tr className={styles.trTransaction}>
          <th className={styles.thTransactionType}>Type</th>
          <th className={styles.thTransactionAmount}>Amount</th>
          <th className={styles.thTransactionCurrency}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbodyTransaction}>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td className={styles.tdType}>{transaction.type}</td>
            <td className={styles.tdAmount}>{transaction.amount}</td>
            <td className={styles.tdCurrency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory