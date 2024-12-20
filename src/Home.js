import React from 'react';
import Item from './item';
import Item1 from './item1';
import Item2 from './item2';
import Item3 from './item3';
import Item4 from './item4';
import Item5 from './item5';
import Item6 from './item6';
import Item7 from './item7';
import Item8 from './item8';
import Item9 from './item9';
import Item10 from './item10';
import Item11 from './item11';
import Item12 from './item12';

const Home = () => {
  return (
    <div>
      <div className='itemContainer'>
      <Item />
      <Item1 />
      <Item2 />
    </div>
    <br>
    
    </br>
    <div className='itemContainer'>
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
    <br>
    </br>
    <div className='itemContainer'>
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
    <br>
    </br>
    <div className='itemContainer'>
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
    <br>
    </br>
    <div className='itemContainer'>
      <Item12/>
    </div>
    </div>
  );
}

export default Home;
