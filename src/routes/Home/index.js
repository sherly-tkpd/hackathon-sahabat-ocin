import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../constants/routes';

const Home = () => (
  <Fragment>
    <h1>
      Welcome to WebXR enabled Ecommerce
    </h1>
    <Link to={ROUTES.PRODUCT_LIST}>Go to Product List</Link>
  </Fragment>
);

export default Home;
