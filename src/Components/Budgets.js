import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Budget from "./Budget";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Budgets() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transaction`).then((res) => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <div className="Index">
      <div>{/* add graph here */}</div>
      
      <section>
      
        
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Budget key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button>
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
}
