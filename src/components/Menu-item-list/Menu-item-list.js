import React from 'react';

import MenuItem from '../Menu-item/Menu-item.js';
import { connect } from "react-redux"


import './Menu-item-list.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';
import { createStructuredSelector } from 'reselect';


const MenuItemList = ({sections}) => {

    return (
      <div className='menu-item-list'>
        {sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }

  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  })

export default connect(mapStateToProps)(MenuItemList);