import React from 'react';
import Image1 from './images/Nike2.jpeg';
import './App.css';
const item1 = () => {
  return (
    <div className='No1'>
         <div>
        <img src={Image1} alt="Nike Air Force" height="200" width="250" />
      </div>
      <div>
        <h3>
        Nike Air Max 1 By You Custom Shoes
        </h3>
        <h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price 12000/-
        </h2>
        <div className='butn'>
        <button type='text' > Add To Cart</button>
        </div>
      </div>
      
    </div>
  );
}

export default item1;
