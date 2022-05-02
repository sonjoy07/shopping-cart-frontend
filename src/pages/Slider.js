import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Slider() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        //   <section id="slider">{/*slider*/}
        //     <div className="container">
        //       <div className="row">
        //         <div className="col-sm-12">
        //           <div id="slider-carousel" className="carousel slide" data-ride="carousel">
        //             <ol className="carousel-indicators">
        //               <li data-target="#slider-carousel" data-slide-to={0} className="active" />
        //               <li data-target="#slider-carousel" data-slide-to={1} />
        //               <li data-target="#slider-carousel" data-slide-to={2} />
        //             </ol>
        //             <div className="carousel-inner">
        //               <div className="item active">
        //                 <div className="col-sm-6">
        //                   <h1><span>E</span>-SHOPPER</h1>
        //                   <h2>Free E-Commerce Template</h2>
        //                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        //                   <button type="button" className="btn btn-default get">Get it now</button>
        //                 </div>
        //                 <div className="col-sm-6">
        //                   <img src="assets/images/home/girl1.jpg" className="girl img-responsive" alt="" />
        //                   <img src="assets/images/home/pricing.png" className="pricing" alt="" />
        //                 </div>
        //               </div>
        //               <div className="item">
        //                 <div className="col-sm-6">
        //                   <h1><span>E</span>-SHOPPER</h1>
        //                   <h2>100% Responsive Design</h2>
        //                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        //                   <button type="button" className="btn btn-default get">Get it now</button>
        //                 </div>
        //                 <div className="col-sm-6">
        //                   <img src="assets/images/home/girl2.jpg" className="girl img-responsive" alt="" />
        //                   <img src="assets/images/home/pricing.png" className="pricing" alt="" />
        //                 </div>
        //               </div>
        //               <div className="item">
        //                 <div className="col-sm-6">
        //                   <h1><span>E</span>-SHOPPER</h1>
        //                   <h2>Free Ecommerce Template</h2>
        //                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        //                   <button type="button" className="btn btn-default get">Get it now</button>
        //                 </div>
        //                 <div className="col-sm-6">
        //                   <img src="assets/images/home/girl3.jpg" className="girl img-responsive" alt="" />
        //                   <img src="assets/images/home/pricing.png" className="pricing" alt="" />
        //                 </div>
        //               </div>
        //             </div>
        //             <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
        //               <i className="fa fa-angle-left" />
        //             </a>
        //             <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
        //               <i className="fa fa-angle-right" />
        //             </a>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        <Carousel>
            {
                items.map((slide, i) =>{return (
                <Paper>
                        <h2>{slide.name}</h2>
                        <p>{slide.description}</p>

                        <Button className="CheckButton">
                            Check it out!
                        </Button>
                    </Paper>)}
                )
            }
        </Carousel>
    )
}
