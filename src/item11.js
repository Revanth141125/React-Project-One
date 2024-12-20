import React from 'react';
import Item11 from './images/Nike11.jpeg';
import './App.css';

const item11 = () => {
  return (
          <div className='No1'>
                   <div>
                  <img src={Item11} alt="Nike Air Force" height="200" width="250" />
                </div>
                <div>
                  <h3>
                     &nbsp; Nike Invincible 3 Men's Road Running Shoes
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

export default item11;
