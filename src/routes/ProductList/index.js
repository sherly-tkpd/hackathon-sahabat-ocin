import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import products from "../../constants/products";
import ROUTES from "../../constants/routes";

import Viewer3D from "../../components/Viewer3D";

const getDetailPath = (slug) => ROUTES.PRODUCT_DETAIL.replace(":slug", slug);

const imgThumbnailStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  display: 'block',
  margin: '0 auto',
}


const renderProductCard = product => {
  const category = product.faceModel ? "cat--1" : "cat--2"
  const imgURL = product.images[0];
  return (
    <div class={`col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 ${category}`} key={product.id}>
        <div class="product foo">
            <div class="product__inner">
                <Link to={`/products/${product.slug}`}>
                  <div class="pro__thumb" style={{width: '270px', height: '270px'}}>
                    <img src={imgURL} alt="product images" style={imgThumbnailStyle}/>
                  </div>
                </Link>
                <div class="product__hover__info">
                    <ul class="product__action">
                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                        <li><a title="Add to Cart" href=""><span class="ti-shopping-cart"></span></a></li>
                        <li><a title="Wishlist" href=""><span class="ti-heart"></span></a></li>
                    </ul>
                </div>
            </div>
            <div class="product__details">
              <h2><Link to={`/products/${product.slug}`}>{product.title}</Link></h2>
                <ul class="product__price">
                    <li class="old__price">{product.price *1.25}</li>
                    <li class="new__price">{product.price}</li>
                </ul>
            </div>
        </div>
    </div>
  )
};


const ProductList = () => {
  return (
    <div class="wrapper fixed__footer">
    <Header title="Products Page"/>
    <section class="htc__product__area shop__page ptb--130 bg__white">
        <div class="container">
            <div class="htc__product__container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="filter__menu__container">
                            <div class="product__menu">
                                <button data-filter="*">All</button>
                                <button data-filter=".cat--1">Beauty</button>
                                <button data-filter=".cat--2">Household</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="product__list another-product-style">
                        {products.map(product => renderProductCard(product))}
                    </div>
                </div>
                
                <div class="row mt--60">
                    <div class="col-md-12">
                        <div class="htc__loadmore__btn">
                            <a href="#">load more</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  );
};

export default ProductList;
