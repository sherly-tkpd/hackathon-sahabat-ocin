import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import products from "../../constants/products";
import ROUTES from "../../constants/routes";

import Viewer3D from "../../components/Viewer3D";

const getDetailPath = (slug) => ROUTES.PRODUCT_DETAIL.replace(":slug", slug);

const ProductList = () => {
  return (
    <Fragment>
      <h1>Product List Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={getDetailPath(product.slug)}>Go to {product.slug}</Link>
        </div>
      ))}
      <Viewer3D />
    </Fragment>
  );
};

export default ProductList;
