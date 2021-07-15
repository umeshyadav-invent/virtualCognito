import React from 'react'
import Link from 'next/link'

const EdemyPremium = () => {
    return (
        <div>
            <div className="view-all-courses-area-three bg-fff8f8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-image-style-two">
                                <img src="/images/strategy.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-content-style-two">
                                <span className="sub-title">DISTANCE LEARNING</span>
                                <h2>Get ahead with Learning Paths. Stay Sharp.</h2>
                                <p>With The Open University you can study whenever and wherever you choose. We have students in over 128 countries, and a global reputation as a pioneer in the field of flexible learning. Our flexible teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.</p>
                                <Link href="/courses-1">
                                    <a className="default-btn"><i className="flaticon-agenda"></i>View Courses<span></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bulb"><img src="/images/bulb.png" alt="image" /></div>
            </div>

            <div className="premium-access-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="premium-access-content-style-two">
                                <span className="sub-title">GO AT YOUR OWN PACE</span>
                                <h2>Give Their Limitless Potential Unlimited Access</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link href="/membership-levels">
                                    <a className="default-btn">
                                        <i className="flaticon-user"></i>Get Started Now<span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="premium-access-image-style-two">
                                <img src="/images/security.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EdemyPremium
