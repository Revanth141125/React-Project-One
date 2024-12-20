import React from 'react';
import Item2 from './images/Nike3.jpeg';
import './App.css';
const item2 = () => {
  return (
    <div className='No1'>
         <div>
        <img src={Item2} alt="Nike Air Force" height="200" width="250" />
      </div>
      <div>
        <h3>
           &nbsp; Nike Air Force 1 
            White for &nbsp;&nbsp;Men
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

export default item2;
