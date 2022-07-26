import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

export default function BudgetDetails() {
  
    const [transaction, setTransactions] = useState([]);
    let { index } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`${API}/transaction/${index}`)
        .then((res) => {
          setTransactions(res.data);
        })
  
        .catch(() => {
          navigate("/not_found");
        });
    }, [index, navigate]);
    const handleDelete = () => {
      axios
        .delete(`${API}/transaction/${index}`)
        .then(() => {
          navigate("/transaction");
        })
        .catch(() => {
          console.warn("error");
        });
    };
  
    return (
      <div className='transaction_show' >
        <p>Date: {transaction.date}</p>
        <p>Name: {transaction.item_name}</p>
        <p>Amount: ${transaction.amount}</p>
        <p>From: {transaction.from}</p>
        <p>Category: {transaction.category}</p>
  
        <div className="buttons_Show">
          <div>
            <Link to={`/transaction`}>
              <button className='back_show_button'>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/transaction/${index}/edit`}>
              <button className='edit_show_button' >Edit</button>
            </Link>
          </div>
          <div>
            <button className='delete_show_button' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
