import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function BudgetNewForm() {
  const navigate = useNavigate();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transaction`, transaction)
      .then((res) => {
        navigate("/transaction");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit} autoComplete="on">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          value={transaction.date}
          placeholder="00/00/0000"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="item_name">Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Neflix"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="$0.00"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />

        <input type="submit"  value="Create New Item" />
      </form>
    </div>
  );
}

