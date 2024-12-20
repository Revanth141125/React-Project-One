import React from 'react';
import Item10 from './images/Nike10.jpeg';
import './App.css';

const item10 = () => {
   return (
        <div className='No1'>
                 <div>
                <img src={Item10} alt="Nike Air Force" height="200" width="250" />
              </div>
              <div>
                <h3>
                   &nbsp; Nike pegasus Trial 5
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

export default item10;
