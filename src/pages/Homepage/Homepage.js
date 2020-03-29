import React from 'react';

import MenuItemList from '../../components/Menu-item-list/Menu-item-list.js';

/* import './Homepage.scss'; */
import { HomePageContainer } from './Homepage.styles.js';



const HomePage = () => (
  <HomePageContainer>
    <MenuItemList />
  </HomePageContainer>
);

export default HomePage;