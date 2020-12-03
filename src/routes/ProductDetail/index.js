import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ROUTES from '../../constants/routes';
import products from '../../constants/products';


const ProductList = () => {
  const { slug = '' } = useParams();
  const product = products.filter(product => product.slug === slug)[0] || {};

  // TODO: Fandok -- popup 360 view
  const render360ViewButton = () => (
    <div class="product-video">
      <a class="360-popup">
        <i class="zmdi zmdi-videocam"></i> 360 view
      </a>
    </div>
  );

  // TODO: Andy -- change color to shades accordingly --> from product.shades.rgba
  const renderColorOptions = () => {
    return (
      <div class="pro__dtl__color">
        <h2 class="title__5">Choose Colour</h2>
        <ul class="pro__choose__color">  
          {product.shades.map(shade => <li class="red"><a href="#"><i class="zmdi zmdi-circle"></i></a></li>)}
        </ul>
      </div>
    );
  }

  // TODO: Andy -- popup for try on face functionality
  const handleTryMakeUp = () => {

  }

  // TODO: Ocin -- popup for place object in room functionality
  const handlePlaceInRoom = () => {

  }

  return (
    <Fragment>
      <Header title="Product Details"/>
      
        <section class="htc__product__details pt--120 pb--100 bg__white">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div class="product__details__container">
                            
                            <ul class="product__small__images" role="tablist">
                                <li role="presentation" class="pot-small-img active">
                                    <a href="#img-tab-1" role="tab" data-toggle="tab">
                                        <img src="/images/product-details/small-img/1.jpg" alt="small-image"/>
                                    </a>
                                </li>
                                <li role="presentation" class="pot-small-img">
                                    <a href="#img-tab-2" role="tab" data-toggle="tab">
                                        <img src="/images/product-details/small-img/2.jpg" alt="small-image"/>
                                    </a>
                                </li>
                                <li role="presentation" class="pot-small-img hidden-xs">
                                    <a href="#img-tab-3" role="tab" data-toggle="tab">
                                        <img src="/images/product-details/small-img/3.jpg" alt="small-image"/>
                                    </a>
                                </li>
                                <li role="presentation" class="pot-small-img hidden-xs hidden-sm">
                                    <a href="#img-tab-4" role="tab" data-toggle="tab">
                                        <img src="/images/product-details/small-img/2.jpg" alt="small-image"/>
                                    </a>
                                </li>
                            </ul>
                            
                            <div class="product__big__images">
                                <div class="portfolio-full-image tab-content">
                                    <div role="tabpanel" class="tab-pane fade in active product-video-position" id="img-tab-1">
                                        <img src="/images/product-details/big-img/10.jpg" alt="full-image"/>
                                        {product.objectModel && render360ViewButton()}
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade product-video-position" id="img-tab-2">
                                        <img src="/images/product-details/big-img/12.jpg" alt="full-image"/>
                                        {product.objectModel && render360ViewButton()}
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade product-video-position" id="img-tab-3">
                                        <img src="/images/product-details/big-img/11.jpg" alt="full-image"/>
                                        {product.objectModel && render360ViewButton()}
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade product-video-position" id="img-tab-4">
                                        <img src="/images/product-details/big-img/12.jpg" alt="full-image"/>
                                        {product.objectModel && render360ViewButton()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 smt-30 xmt-30">
                        <div class="htc__product__details__inner">
                            <div class="pro__detl__title">
                              <h2>{product.title}</h2>
                            </div>
                            <div class="pro__dtl__rating">
                                <ul class="pro__rating">
                                    <li><span class="ti-star"></span></li>
                                    <li><span class="ti-star"></span></li>
                                    <li><span class="ti-star"></span></li>
                                    <li><span class="ti-star"></span></li>
                                    <li><span class="ti-star"></span></li>
                                </ul>
                                <span class="rat__qun">(Based on 0 Ratings)</span>
                            </div>
                            <div class="pro__details">
                              <p>{product.description}</p>
                            </div>
                            <ul class="pro__dtl__prize">
                                <li class="old__prize">{product.price*1.25}</li>
                                <li>{product.price}</li>
                            </ul>
                            {product.faceModel && renderColorOptions()}
                            <div class="product-action-wrap">
                                <div class="prodict-statas"><span>Quantity :</span></div>
                                <div class="product-quantity">
                                    <form id='myform' method='POST' action='#'>
                                        <div class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" value="02"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <ul class="pro__dtl__btn">
                                {product.faceModel ? 
                                  <li class="buy__now__btn" onClick={handleTryMakeUp()}><a href="#">TRY ON</a></li> : 
                                  <li class="buy__now__btn" onClick={handlePlaceInRoom()}><a href="#">PLACE IN ROOM</a></li>
                                }
                                <li><a href="#"><span class="ti-heart"></span></a></li>
                            </ul>
                            <div class="pro__social__share">
                                <h2>Share :</h2>
                                <ul class="pro__soaial__link">
                                    <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      <Footer/>
    </Fragment>
  );
};

export default ProductList;
