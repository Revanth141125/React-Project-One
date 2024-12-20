import React from 'react';
import Item3 from './images/Nike4.jpeg';
import './App.css';

const item3 = () => {
  return (
    <div className='No1'>
             <div>
            <img src={Item3} alt="Nike Air Force" height="200" width="250" />
          </div>
          <div>
            <h3>
               &nbsp; Nike White Air Force 1 '07 Sneakerss
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

export default item3;
