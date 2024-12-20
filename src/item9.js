import React from 'react';
import Item9 from './images/Nike9.jpeg';
import './App.css';

const item9 = () => {
  return (
      <div className='No1'>
               <div>
              <img src={Item9} alt="Nike Air Force" height="200" width="250" />
            </div>
            <div>
              <h3>
                 &nbsp; Nike Impack4 BasketBall
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

export default item9;
