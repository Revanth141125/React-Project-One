import React from 'react';
import Item6 from './images/Nike Sneakers White.jpeg';
import './App.css';

const item6 = () => {
     return (
          <div className='No1'>
                   <div>
                  <img src={Item6} alt="Nike Air Force" height="200" width="250" />
                </div>
                <div>
                  <h3>
                     &nbsp; Nike Sneakers White
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

export default item6;
