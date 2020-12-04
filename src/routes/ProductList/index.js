import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import products from "../../constants/products";
import ROUTES from "../../constants/routes";

import Viewer3D from "../../components/Viewer3D";
import "./index.css";

const getDetailPath = (slug) => ROUTES.PRODUCT_DETAIL.replace(":slug", slug);

const imgThumbnailStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  display: "block",
  margin: "0 auto",
};

const renderProductCard = (product) => {
  const category = product.faceModel ? "cat--1" : "cat--2";
  const imgURL = product.images[0];
  return (
    <div
      className={`col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 ${category}`}
      key={product.id}
    >
      <div className="product foo">
        <div className="product__inner">
          <Link to={`/products/${product.slug}`}>
            <div
              className="pro__thumb"
              style={{ width: "270px", height: "270px" }}
            >
              <img
                src={imgURL}
                alt="product images"
                style={imgThumbnailStyle}
              />
            </div>
          </Link>
          <div className="product__hover__info">
            <ul className="product__action">
              <li>
                <a
                  data-toggle="modal"
                  data-target="#productModal"
                  title="Quick View"
                  className="quick-view modal-view detail-link"
                  href="#"
                >
                  <span className="ti-plus"></span>
                </a>
              </li>
              <li>
                <a title="Add to Cart" href="">
                  <span className="ti-shopping-cart"></span>
                </a>
              </li>
              <li>
                <a title="Wishlist" href="">
                  <span className="ti-heart"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product__details">
          <h2>
            <Link to={`/products/${product.slug}`}>{product.title}</Link>
          </h2>
          <ul className="product__price">
            <li className="old__price">{product.price * 1.25}</li>
            <li className="new__price">{product.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="wrapper fixed__footer">
      <Header title="Products Page" />
      <section className="htc__product__area shop__page ptb--130 bg__white">
        <div className="container">
          <div className="htc__product__container">
            <div className="row">
              <div className="col-md-12">
                <div className="filter__menu__container">
                  <div className="product__menu">
                    <button data-filter="*">All</button>
                    <button data-filter=".cat--1">Beauty</button>
                    <button data-filter=".cat--2">Household</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="product__list another-product-style">
                {products.map((product) => renderProductCard(product))}
              </div>
            </div>

            <div className="row mt--60">
              <div className="col-md-12">
                <div className="htc__loadmore__btn">
                  <a href="#">load more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductList;
