import React from 'react'
import Link from 'next/link'

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70 bg-fff8f8">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">EDUCATION FOR EVERYONE</span>
                    <h2>Online Coaching Lessons For Remote Learning​</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Learn the Latest Skills</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <Link href="/authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Learn from Industry Experts</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <Link href="/authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-world"></i>
                            </div>
                            <h3>Learn From Anywhere</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <Link href="/authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-world"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
