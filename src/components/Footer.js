import React from "react";

const Footer = () => (
  <footer className="htc__foooter__area gray-bg">
    <div className="container">
      <div className="row">
        <div className="footer__container clearfix">
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="ft__widget">
              <div className="ft__logo">
                <a href="index.html">
                  <img src="/images/logo/logo.png" alt="footer logo" />
                </a>
              </div>
              <div className="footer-address">
                <ul>
                  <li>
                    <div className="address-icon">
                      <i className="zmdi zmdi-pin"></i>
                    </div>
                    <div className="address-text">
                      <p>Tokopedia Tower, Indonesia</p>
                    </div>
                  </li>
                  <li>
                    <div className="address-icon">
                      <i className="zmdi zmdi-email"></i>
                    </div>
                    <div className="address-text">
                      <a href="#"> info@tokopedia.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="social__icon">
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
            <div className="ft__widget">
              <h2 className="ft__title">Categories</h2>
              <ul className="footer-categories">
                <li>
                  <a>Beauty</a>
                </li>
                <li>
                  <a>Household</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
            <div className="ft__widget">
              <h2 className="ft__title">Information</h2>
              <ul className="footer-categories">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Returns and Exchanges</a>
                </li>
                <li>
                  <a href="#">Shipping and Delivery</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
