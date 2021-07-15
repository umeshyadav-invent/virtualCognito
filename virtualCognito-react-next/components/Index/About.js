import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className="about-area ptb-100 bg-f9fbff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/images/about-img12.png" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">DISTANCE LEARNING</span>
                            <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Expert Instruction</span></li>
                                <li><span><i className="flaticon-time-left"></i> Lifetime Access</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>
                            <Link href="/courses-1">
                                <a className="default-btn"><i className="flaticon-user"></i>View All Courses<span></span></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bulb"><img src="/images/bulb.png" alt="image" /></div>
        </div>
    )
}

export default About
