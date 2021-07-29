import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class HomeSlider extends Component {
    state = { }
    render() { 
        return ( 
            <Carousel >
                <Carousel.Item> { /* Start First Slises  */ }
                    <img
                        className="w-100"
                        src={'/Slider image/Firslide.png'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MSP Tech Club</h3>
                        <p></p>
                        <br />
                    </Carousel.Caption>
                </Carousel.Item> { /* End First Slises  */ }

                <Carousel.Item> { /* Start Second Slises 'Menu' */ }
                    <img
                        className="w-100"
                        src={'/Slider image/SecSlide.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>MSP'21</h3>
                        <p>First Event 'Blind-Area'</p>
                        <br />
                    </Carousel.Caption>
                </Carousel.Item> { /* End Second Slises 'Menu' */ }

                <Carousel.Item> { /* Start Third Slises */ }
                    <img
                        className="w-100"
                        src={'/Slider image/ThirdSlide.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>MSP'20 Closing</h3>
                        <p>Our Closing in first season</p>
                        <br />
                    </Carousel.Caption>
                </Carousel.Item> { /* End Third Slises */ }
            </Carousel>
         );
    }
}
 
export default HomeSlider;