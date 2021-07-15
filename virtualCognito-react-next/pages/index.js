import React from 'react'
import MainBanner from '@/components/Index/MainBanner'
import Features from '@/components/Index/Features'
import TopCourses from '@/components/Index/TopCourses'
import About from '@/components/Index/About'
import Testimonials from '@/components/Index/Testimonials'
import Instance from '@/components/Index/Instance'
import Partner from '@/components/Index/Partner'
import Ad from '@/components/Index/Ad'
import Funfacts from '@/components/Index/Funfacts'
import Blog from '@/components/Index/Blog'
import EdemyPremium from '@/components/Index/EdemyPremium'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const Index = ({ courses }) => {
    // console.log(courses)
    return (
        <React.Fragment>
            <MainBanner />
            <Features />
            <TopCourses courses={courses} />
            <About />
            <Testimonials />
            <Instance />
            <Partner />
            <Ad />
            <Funfacts />
            <Blog />
            <EdemyPremium />
        </React.Fragment>
    )
}

Index.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default Index