import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Edit from './Components/Pages/Edit';
import FourOFour from './Components/Pages/FourOFour';
import Home from './Components/Pages/Home';
import Index from './Components/Pages/Index';
import New from './Components/Pages/New';
import Show from './Components/Pages/Show';
import NavBar from './Components/NavBar';
import './App.css';

export default function App() {



  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transaction" element={<Index />} />
            <Route path="/transaction/new" element={<New />} />
            <Route path="/transaction/:index" element={<Show />} />
            <Route path="/transaction/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
