import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <section id="slider">{/*slider*/}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Carousel activeIndex={index} onSelect={handleSelect} fade>
                            <Carousel.Item>
                                <div className="col-sm-6">
                                    <h1><span>E</span>-SHOPPER</h1>
                                    <h2>Free E-Commerce Template</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <button type="button" className="btn btn-default get">Get it now</button>
                                </div>
                                <img className="d-block w-100" src="assets/images/home/girl1.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-6">
                                    <h1><span>E</span>-SHOPPER</h1>
                                    <h2>Free E-Commerce Template</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <button type="button" className="btn btn-default get">Get it now</button>
                                </div>
                                <img className="d-block w-100" src="assets/images/home/girl2.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-6">
                                    <h1><span>E</span>-SHOPPER</h1>
                                    <h2>Free E-Commerce Template</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <button type="button" className="btn btn-default get">Get it now</button>
                                </div>
                                <img className="d-block w-100" src="assets/images/home/girl3.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
