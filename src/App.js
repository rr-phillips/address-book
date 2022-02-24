import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';

import './css/App.scss';

const App = () => {

  return (
    // creates the routes for the details and the home page
    <Router>
      <Routes>
        <Route path="details" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;