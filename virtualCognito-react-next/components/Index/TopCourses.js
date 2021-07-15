import React from 'react'
import Link from 'next/link'

const TopCourses = ({ courses }) => {
    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">GO AT YOUR OWN PACE</span>
                    <h2>Top Selling Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">

                    {courses ? courses.map(course => (
                        <div className="col-lg-4 col-md-6" key={course.id}>
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                        <a className="d-block image">
                                            <img src={course.profilePhoto} alt={course.title} />
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="fav"><i className="flaticon-heart"></i></a>
                                    </Link>

                                    <div className="price shadow">${course.price}</div>
                                </div>

                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={`${course.user.profilePhoto ? course.user.profilePhoto : "/images/user1.jpg"}`} className="rounded-circle" alt={course.user.name} />
                                        <span>{course.user.name}</span>
                                    </div>

                                    <h3 title={course.title}>
                                        <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                            <a>{course.title.slice(0, 20)}...</a>
                                        </Link>
                                    </h3>
                                    
                                    <p>{course.overview.slice(0, 100)}...</p>

                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agenda'></i> {parseInt(course.lessons)} Lessons
                                        </li>
                                        <li>
                                            <i className='flaticon-people'></i> {course.enroled_courses.length} Students
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <h2>Empty</h2>
                    )}

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. <Link href="/authentication"><a>Join Free Now</a></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCourses;