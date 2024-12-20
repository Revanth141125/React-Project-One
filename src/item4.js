import React from 'react';
import Item4 from './images/Nike5.jpeg';
import './App.css';

const item4 = () => {
  return (
     <div className='No1'>
              <div>
             <img src={Item4} alt="Nike Air Force" height="200" width="250" />
           </div>
           <div>
             <h3>
                &nbsp; Nike Waffle Nav Men's
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

export default item4;
