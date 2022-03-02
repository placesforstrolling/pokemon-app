import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../header/Header';
import Mainpage from '../pages/Mainpage';
import Page404 from '../pages/404';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
              
              <Route path="/" element={<Mainpage />} />
              {/* <Route path="about" element={<About />} /> */}
              <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      
    </>
     
  );
}

export default App;
