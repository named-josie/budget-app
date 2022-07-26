import { Link } from "react-router-dom";

function Budget({ transaction, index }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <div className="Budget">
        <Link to={`/transaction/${index}`}>{transaction.item_name}</Link>
      </div>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Budget;