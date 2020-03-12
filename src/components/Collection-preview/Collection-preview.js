import React from 'react';

import Collection from '../Collection/Collection.js';

import './Collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <Collection key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;