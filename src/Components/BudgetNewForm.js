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
    <div className="new">
      <h1 className="new-title">Create New Item</h1>
      <form onSubmit={handleSubmit} autoComplete="on">
        <label htmlFor="date">Date</label>
        <br></br>
        <input
          id="date"
          type="date"
          value={transaction.date}
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="item_name">Item Name</label>
        <br></br>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <br></br>
        <label htmlFor="amount">Amount</label>
        <br></br>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="$0.00"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="from">From</label>
        <br></br>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
          required
        />
        <br></br>
        <label className="label" htmlFor="category">Category</label>
        <br></br>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
<br></br>
        <input className="create-button" type="submit"  value="New Item" />
      </form>
    </div>
  );
}

