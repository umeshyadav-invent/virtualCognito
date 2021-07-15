import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const CheckoutBtn = ({
    handleCheckout, image, name, price
}) => {

    const stripeTotal = Number((price * 100).toFixed(2));
    // console.log(stripeTotal)

    return (
        <div>
            <StripeCheckout
                name={name}
                amount={stripeTotal}
                image={image}
                currency="USD"
                stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
                token={handleCheckout}
                triggerEvent="onClick"
            >
                <button className="default-btn">
                    <i className="flaticon-tag"></i> Buy Now <span></span>
                </button>
            </StripeCheckout>
        </div>
    )
}

export default CheckoutBtn
