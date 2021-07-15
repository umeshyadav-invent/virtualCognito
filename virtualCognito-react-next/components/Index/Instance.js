import React from 'react'
import Link from 'next/link'

const Instance = () => {
    return (
        <div className="get-instant-courses-area-two bg-f9fbff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="get-instant-courses-content-style-two">
                            <span className="sub-title">GET INSTANT ACCESS TO THE FREE</span>
                            <h2>Self Development Course</h2>
                            <p>With The Open University you can study whenever and wherever you choose. We have students in over 128 countries, and a global reputation as a pioneer in the field of flexible learning. Our flexible teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.</p>
                            <Link href="/authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>Start For Free<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="get-instant-courses-image-style-two">
                            <img src="/images/setting.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bulb"><img src="/images/bulb2.png" alt="image" /></div>
        </div>
    )
}

export default Instance
