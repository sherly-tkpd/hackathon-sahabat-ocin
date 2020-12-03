import React from 'react';


const Footer = () => (
  <footer class="htc__foooter__area gray-bg">
      <div class="container">
          <div class="row">
              <div class="footer__container clearfix">
                  <div class="col-md-3 col-lg-3 col-sm-6">
                      <div class="ft__widget">
                          <div class="ft__logo">
                              <a href="index.html">
                                  <img src="/images/logo/logo.png" alt="footer logo"/>
                              </a>
                          </div>
                          <div class="footer-address">
                              <ul>
                                  <li>
                                      <div class="address-icon">
                                          <i class="zmdi zmdi-pin"></i>
                                      </div>
                                      <div class="address-text">
                                          <p>Tokopedia Tower, Indonesia</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="address-icon">
                                          <i class="zmdi zmdi-email"></i>
                                      </div>
                                      <div class="address-text">
                                          <a href="#"> info@tokopedia.com</a>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <ul class="social__icon">
                              <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                              <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                              <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                              <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  
                  
                  <div class="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                      <div class="ft__widget">
                          <h2 class="ft__title">Categories</h2>
                          <ul class="footer-categories">
                              <li><a>Beauty</a></li>
                              <li><a>Household</a></li>
                          </ul>
                      </div>
                  </div>
                  
                  <div class="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                      <div class="ft__widget">
                          <h2 class="ft__title">Information</h2>
                          <ul class="footer-categories">
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Contact Us</a></li>
                              <li><a href="#">Terms and Conditions</a></li>
                              <li><a href="#">Returns and Exchanges</a></li>
                              <li><a href="#">Shipping and Delivery</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </footer>
  
);


export default Footer;