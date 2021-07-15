import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Testimonials</span>
                    <h2>Our Learners Feedback</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                { display ? <OwlCarousel 
                    className="testimonials-slides-two owl-carousel owl-theme"
                    {...options}>
                    
                    <div className="testimonials-item">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <h3>John Smith</h3>
                                <span>Python Developer</span>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center">
                                <img src="/images/user7.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="testimonials-item">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <h3>David Malan</h3>
                                <span>Developer</span>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center">
                                <img src="/images/user9.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="testimonials-item">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <h3>Sarah Taylor</h3>
                                <span>PHP Developer</span>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center">
                                <img src="/images/user8.png" alt="image" />
                            </div>
                        </div>
                    </div>

                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials
