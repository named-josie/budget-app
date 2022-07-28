import { Link } from "react-router-dom";
import logo from "./styles/images/logo_3.gif"
import "./styles/navbar.css"

export default function NavBar() {
  return (
    <nav>
       <Link to='/'>
          <div>
            <img
              className='logo'
              src={logo}
              alt='Quantum Finance'
            ></img>
          </div>
        </Link>
    
      <h1>
        <Link to="/transaction">Transaction History</Link>
      </h1>
      <button className="new-button">
        <Link to="/transaction/new">New Transaction</Link>
      </button>
    </nav>
  );
}
