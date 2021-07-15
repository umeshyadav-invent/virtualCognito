import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area ptb-100">
            <div className="container">
                {display ?<OwlCarousel
                    className="partner-slides owl-carousel owl-theme" 
                    {...options} >

                    <div className="partner-item">
                        <img src="/images/partner/img13.png" alt="image" />
                    </div>
                    <div className="partner-item">
                        <img src="/images/partner/img14.png" alt="image" />
                    </div>
                    <div className="partner-item">
                        <img src="/images/partner/img15.png" alt="image" />
                    </div>
                    <div className="partner-item">
                        <img src="/images/partner/img16.png" alt="image" />
                    </div>
                    <div className="partner-item">
                        <img src="/images/partner/img17.png" alt="image" />
                    </div>
                    
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partner
