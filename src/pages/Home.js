import React from 'react'
import FeatureItems from './FeatureItems';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import Slider from './Slider';

export default function Home() {
    return (
        <div>
            <Slider/>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                    <LeftSidebar/>
                </div>
                <div className="col-sm-9 padding-right">
                    <FeatureItems/>
                  <div className="category-tab">{/*category-tab*/}
                    <div className="col-sm-12">
                      <ul className="nav nav-tabs">
                        <li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                        <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                        <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                        <li><a href="#kids" data-toggle="tab">Kids</a></li>
                        <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade active in" id="tshirt">
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="blazers">
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="sunglass">
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="kids">
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="poloshirt">
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="assets/images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/*/category-tab*/}
                  <div className="recommended_items">{/*recommended_items*/}
                    <h2 className="title text-center">recommended items</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="item active">	
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend1.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend2.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend3.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">	
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend1.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend2.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="product-image-wrapper">
                              <div className="single-products">
                                <div className="productinfo text-center">
                                  <img src="assets/images/home/recommend3.jpg" alt="" />
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                        <i className="fa fa-angle-left" />
                      </a>
                      <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                        <i className="fa fa-angle-right" />
                      </a>			
                    </div>
                  </div>{/*/recommended_items*/}
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      );
}
