import React from 'react';
import { Route } from "react-router-dom"
/* import CollectionPreview from '../../components/Collection-preview/Collection-preview.js';
import { selectCollections } from '../../redux/shop/shop.selector.js';


import { createStructuredSelector } from "reselect" */
import CollectionsOverview from '../../components/collections-overview/collections-overview.unit.js';
import CollectionPage from '../collectionpage/collectionpage.unit.js';




const ShopPage =  ({match}) => {

    return (
      <div className='shop-page'>
          <Route exact path={`${match.path}`} component ={ CollectionsOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }


export default ShopPage;