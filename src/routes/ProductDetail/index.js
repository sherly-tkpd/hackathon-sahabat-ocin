import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

import ROUTES from '../../constants/routes';

const ProductList = () => {
  const { slug = '' } = useParams();

  return (
    <Fragment>
      <h1>
        Product Detail Page with slug: {slug}
      </h1>
      <Link to={ROUTES.PRODUCT_LIST}>Back to Product List</Link>
    </Fragment>
  );
};

export default ProductList;
