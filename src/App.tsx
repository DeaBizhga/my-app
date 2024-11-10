import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import Home from './components/home';
import Artist from './components/artist';

function App() {
  return (
    <Router>
        <div>
            {/* <nav> */}
                {/* <Link to="/">Home</Link> */}
            {/* </nav> */}
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/artist/1" element={<Artist />} />
            </Routes>
        </div>
    </Router>
);
};

export default App;
