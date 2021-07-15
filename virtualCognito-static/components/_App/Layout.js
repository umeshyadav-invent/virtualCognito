import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>eDemy - React Next Online Courses & Education Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="eDemy - React Next Online Courses & Education Template" />
                <meta name="og:title" property="og:title" content="eDemy - React Next Online Courses & Education Template"></meta>
                <meta name="twitter:card" content="eDemy - React Next Online Courses & Education Template"></meta>
                <link rel="canonical" href="https://edemy-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;