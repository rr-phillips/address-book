import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';

import './css/App.css';

const App = () => {
  
  return (
    // <Router>
    //   <Routes>
    //     <Route path="details/:id" component={Details} />
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Routes>
    // </Router>
    <Home />
  );
};

export default App;