import React from 'react';

import './Collection.scss';

const Collection = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    
    <img src ={imageUrl} className='image' alt="collect"></img>
    
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default Collection;