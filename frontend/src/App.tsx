import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import Bacon from './Bacon';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Bacon" className="nav-link">
              Bacon
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<TopBanner saying="Joel Hilton's Movie Website" />}
        />
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/Bacon" element={<Bacon />} />
      </Routes>
    </>
  );
}

export default App;
