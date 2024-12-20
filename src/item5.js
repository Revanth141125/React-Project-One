import React from 'react';
import Item5 from './images/Nike6.jpeg';
import './App.css';

const item5 = () => {
  return (
      <div className='No1'>
               <div>
              <img src={Item5} alt="Nike Air Force" height="200" width="250" />
            </div>
            <div>
              <h3>
                 &nbsp; Nike Sports Retro
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

export default item5;
