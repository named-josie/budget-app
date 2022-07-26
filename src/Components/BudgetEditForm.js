import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function BudgetEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  const [transaction, setTransactions] = useState({
    date: "",
    item_name: "",
    amount: [],
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransactions({ ...transaction, [event.target.id]: event.target.value });
  };

  
  useEffect(() => {
    axios
      .get(`${API}/transaction/${index}`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transaction/${index}`, transaction)
      .then(() => {
        navigate(`/transaction/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });

      
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit} autocomplete="off">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          required
          value={transaction.date}
          placeholder="date"
          onChange={handleTextChange}
        />
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
        />

        <input type="submit" value="Edit Item" />
        <label htmlFor="category">Choose a category:</label>
<select>
  <option>{transaction.category}</option>
</select>
      </form>
      <Link to={`/transaction/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

