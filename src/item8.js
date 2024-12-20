import React from 'react';
import Item8 from './images/Nike8.jpeg';
import './App.css';
const item8 = () => {
 return (
    <div className='No1'>
             <div>
            <img src={Item8} alt="Nike Air Force" height="200" width="250" />
          </div>
          <div>
            <h3>
               &nbsp; Nike Precision 6 Basketball Shoes
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

export default item8;
