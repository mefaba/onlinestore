import React from "react"
import { connect } from "react-redux"
import {createStructuredSelector} from "reselect"

import "./collections-overview.scss"
import CollectionPreview from "../Collection-preview/Collection-preview"
import { selectCollections } from '../../redux/shop/shop.selector.js';


const CollectionsOverview = ({ collections}) =>{
    return(
        <div>
            {collections.map(({id,...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
    
        ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  })
  

export default connect(mapStateToProps)(CollectionsOverview)