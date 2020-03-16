import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/Collection-preview/Collection-preview.js';
import { selectCollections } from '../../redux/shop/shop.selector.js';


import { createStructuredSelector } from "reselect"

const ShopPage =  ({collections}) => {

    return (
      <div className='shop-page'>
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} title = {collection.title} items = {collection.items}/>
        ))}
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);