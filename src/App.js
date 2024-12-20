import React from 'react';

import Menu from './Menu';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contactus from './Contactus';
import './App.css';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
return (
  <BrowserRouter>
  <div className='container'>
    
    <Menu />
    
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>
   
    
    
  </div>
  </BrowserRouter>
  
);
}

export default App; 

