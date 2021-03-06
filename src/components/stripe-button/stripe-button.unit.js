import React from "react"
import StripeCheckout from "react-stripe-checkout"


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_xmRxnwTyEHrZKH3v3V4ADd3m00I1ECXXpM"
    const onToken = token => {
        console.log(token)
        alert("Payment Succesfull")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name ="Online Store Ltd."
            billingAddress
            shippingAddress
            image ="https://sendeyo.com/up/d/f3eb2117da"
            description = {`Your total is $${price} `}
            amount = {priceForStripe}
            panelLabel ="Pay Now"
            token ={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton