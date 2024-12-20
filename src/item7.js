import React from 'react';
import Item7 from './images/Nike7.jpeg';
import './App.css';

const item7 = () => {
   return (
            <div className='No1'>
                     <div>
                    <img src={Item7} alt="Nike Air Force" height="200" width="250" />
                  </div>
                  <div>
                    <h3>
                       &nbsp; Nike Revolution 7 Men's Road Running Shoes
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

export default item7;
