import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ROUTES from "../../constants/routes";
import products from "../../constants/products";

import Modal from "react-modal";
import Viewer3D from "../../components/Viewer3D";
import WebXR from "./components/WebXR";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const imgThumbnailStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  display: "block",
  margin: "0 auto",
};

const ProductList = () => {
  const { slug = "" } = useParams();
  const [showModal, setShowModal] = useState(false);
  const product = products.filter((product) => product.slug === slug)[0] || {};

  // TODO: Fandok -- popup 360 view
  const render360ViewButton = () => (
    <div class="product-video">
      <button onClick={() => setShowModal((val) => !val)} class="360-popup">
        <i class="zmdi zmdi-videocam"></i> 360 view
      </button>
    </div>
  );

  // TODO: Andy -- change color to shades accordingly --> from product.shades.rgba
  const renderColorOptions = () => {
    return (
      <div class="pro__dtl__color">
        <h2 class="title__5">Choose Colour</h2>
        <ul class="pro__choose__color">
          {product.shades.map((shade) => (
            <li class="red">
              <a href="#">
                <i class="zmdi zmdi-circle"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderProductSmallImages = () => (
    <ul class="product__small__images" role="tablist">
      {product.images.map((imgUrl, index) => {
        let imgHref = `#img-tab-${index + 1}`;
        return (
          <li role="presentation" class="pot-small-img" key={index}>
            <a
              href={imgHref}
              role="tab"
              data-toggle="tab"
              style={{ width: "120px", height: "140px" }}
            >
              <img src={imgUrl} alt="small-image" style={imgThumbnailStyle} />
            </a>
          </li>
        );
      })}
    </ul>
  );

  const renderProductBigImages = () => (
    <div class="product__big__images">
      <div class="portfolio-full-image tab-content">
        {product.images.map((imgUrl, index) => (
          <div
            role="tabpanel"
            class={`tab-pane fade in ${
              index === 0 ? "active" : ""
            } product-video-position`}
            id={`img-tab-${index + 1}`}
          >
            <img src={imgUrl} alt="full-image" />
            {product.objectModel && render360ViewButton()}
          </div>
        ))}
      </div>
    </div>
  );

  // TODO: Andy -- popup for try on face functionality
  const handleTryMakeUp = () => {};

  // TODO: Ocin -- popup for place object in room functionality
  const handlePlaceInRoom = () => {
    if (product.objectURL !== "") {
      new WebXR(product.objectURL);
    }
  };

  return (
    <Fragment>
      <Header title="Product Details" />

      <section class="htc__product__details pt--120 pb--100 bg__white">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div class="product__details__container">
                {renderProductSmallImages()}
                {renderProductBigImages()}
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 smt-30 xmt-30">
              <div class="htc__product__details__inner">
                <div class="pro__detl__title">
                  <h2>{product.title}</h2>
                </div>
                <div class="pro__dtl__rating">
                  <ul class="pro__rating">
                    <li>
                      <span class="ti-star"></span>
                    </li>
                    <li>
                      <span class="ti-star"></span>
                    </li>
                    <li>
                      <span class="ti-star"></span>
                    </li>
                    <li>
                      <span class="ti-star"></span>
                    </li>
                    <li>
                      <span class="ti-star"></span>
                    </li>
                  </ul>
                  <span class="rat__qun">(Based on 0 Ratings)</span>
                </div>
                <div class="pro__details">
                  <p>{product.description}</p>
                </div>
                <ul class="pro__dtl__prize">
                  <li class="old__prize">{product.price * 1.25}</li>
                  <li>{product.price}</li>
                </ul>
                {product.faceModel && renderColorOptions()}
                <div class="product-action-wrap">
                  <div class="prodict-statas">
                    <span>Quantity :</span>
                  </div>
                  <div class="product-quantity">
                    <form id="myform" method="POST" action="#">
                      <div class="product-quantity">
                        <div class="cart-plus-minus">
                          <input
                            class="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value="02"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <ul class="pro__dtl__btn">
                  {product.faceModel ? (
                    <li class="buy__now__btn" onClick={handleTryMakeUp()}>
                      <a href="#">TRY ON</a>
                    </li>
                  ) : (
                    <li class="buy__now__btn" onClick={handlePlaceInRoom()}>
                      <a href="#">PLACE IN ROOM</a>
                    </li>
                  )}
                  <li>
                    <a href="#">
                      <span class="ti-heart"></span>
                    </a>
                  </li>
                </ul>
                <div class="pro__social__share">
                  <h2>Share :</h2>
                  <ul class="pro__soaial__link">
                    <li>
                      <a href="#">
                        <i class="zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="zmdi zmdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="zmdi zmdi-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="stabilization"></div>

      {showModal && (
        <Modal isOpen={showModal} style={customStyles}>
          <Viewer3D
            src={product.objectURL[0]}
            mtl={product.objectURL[1]}
            slug={slug}
          />
          <button
            style={{ marginTop: 10 }}
            onClick={() => setShowModal((val) => !val)}
          >
            Close Modal
          </button>
        </Modal>
      )}

      <Footer />
    </Fragment>
  );
};

export default ProductList;
