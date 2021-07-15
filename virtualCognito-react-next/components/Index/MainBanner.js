import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <div className="main-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content-style-two">
                            <h1>The World's Leading Distance-Learning Provider</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                            <Link href="/authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>Join For Free<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-image-style-two">
                            <img src="/images/banner-img4.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape1">
                <img src="/images/banner-shape1.png" alt="image" />
            </div>
            <div className="banner-shape2">
                <img src="/images/banner-shape2.png" alt="image" />
            </div>
            <div className="banner-shape3">
                <img src="/images/banner-shape3.png" alt="image" />
            </div>
            <div className="bulb">
                <img src="/images/bulb.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner
