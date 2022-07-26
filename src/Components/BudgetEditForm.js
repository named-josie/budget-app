import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function BudgetEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  const [transaction, setTransactions] = useState({
    date: '',
    item_name: '',
    amount: [],
    from: '',
    category: '',
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
    <div className='edit'>
      <h1 className='edit-title'>Edit Transaction</h1>
      <form onSubmit={handleSubmit} autocomplete='off'>
        <label htmlFor='date'>Date:</label>
        <br></br>
        <input
          id='date'
          type='date'
          required
          value={transaction.date}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor='item_name'>Item Name:</label>
        <br></br>
        <input
          id='item_name'
          value={transaction.item_name}
          type='text'
          onChange={handleTextChange}
          placeholder='Item name'
          required
        />
        <br></br>
        <label htmlFor='amount'>Amount:</label>
        <br></br>
        <input
          id='amount'
          type='number'
          name='amount'
          value={transaction.amount}
          placeholder='amount'
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor='from'>From:</label>
        <br></br>
        <input
          id='from'
          type='text'
          name='from'
          value={transaction.from}
          onChange={handleTextChange}
          placeholder='From'
        />
        <br></br>
        <label htmlFor='category'>Category:</label>
        <br></br>
        <input
          id='category'
          value={transaction.category}
          type='text'
          onChange={handleTextChange}
          placeholder='Category'
        />
      </form>
      <Link to={`/transaction/${index}`}>
        <button className='edit-button'>Back</button>
      </Link>
    </div>
  );
}
