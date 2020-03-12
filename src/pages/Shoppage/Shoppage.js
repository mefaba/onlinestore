import React from 'react';

import SHOP_DATA from './SHOP_DATA.js';

import CollectionPreview from '../../components/Collection-preview/Collection-preview.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {

    return (
      <div className='shop-page'>
        {this.state.collections.map((collection) => (
          <CollectionPreview key={collection.id} title = {collection.title} items = {collection.items}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;