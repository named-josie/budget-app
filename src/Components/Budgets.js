import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Budget from './Budget';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

export default function Budgets() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transaction`).then((res) => {
      setTransactions(res.data);
    });
  }, []);

  const total = () => {
    let sum = 0;
    for (let trans of transactions) {
      sum += Number(trans.amount);
    }
    return sum;
  };

  const sumofall = total();

  let color = (sumofall) => {
    if (sumofall >= 1000) {
      return 'green';
    } else if (sumofall <= 1000 && sumofall >= 0) {
      return 'purple';
    } else {
      return 'red';
    }
  };

  

  return (
    <div className='Index'>
      <div>{/* add graph here */}</div>
      <h2 className='budgets_title'>Transaction History</h2>
      
      <h3 className='total'>
        Current Amount:
        <span className={color(sumofall)}> ${sumofall}</span>
      </h3>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Budget key={index} transaction={transaction} index={index} />
              );
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button className='backbutton'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
}
