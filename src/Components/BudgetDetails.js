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
    }, [index,navigate]);
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
      <div className='show' >
        <h1 className='show-title'>{transaction.item_name}</h1>
        <div className='show-details'>
        <p className='show_p'>Date: {transaction.date}</p>
        <p className='show_p'>Amount: ${transaction.amount}</p>
        <p className='show_p'>From: {transaction.from}</p>
        <p className='show_p'>Category: {transaction.category}</p>
        </div>
        <div>
          <div>
            <Link to={`/transaction`}>
              <button className='show_button'>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/transaction/${index}/edit`}>
              <button className='show_button' >Edit</button>
            </Link>
          </div>
          <div>
            <button className='show_button' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
