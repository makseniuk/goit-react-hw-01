import "./TransactionHistory.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className="tableTransaction">
      <thead className="theadTransaction">
        <tr className="trTransaction">
          <th className="thTransactionType">Type</th>
          <th className="thTransactionAmount">Amount</th>
          <th className="thTransactionCurrency">Currency</th>
        </tr>
      </thead>
      <tbody className="tbodyTransaction">
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td className="tdType">{transaction.type}</td>
            <td className="tdAmount">{transaction.amount}</td>
            <td className="tdCurrency">{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory