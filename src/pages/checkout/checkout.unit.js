import React from "react"
import { connect } from "react-redux"
import "./checkout.scss"
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.unit";

import CheckoutItem from '../../components/checkout-item/checkout-item.unit.js';

import {
    selectCartItems,
    selectCartTotal
  } from '../../redux/cart/cart-selector';


const CheckoutPage = ({cartItems,total}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Descrition</span>

                </div>
                <div className="header-block">
                    <span>Quantitiy</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: [Any future date] - CVV:[Any 3 digits]
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });
  
export default connect(mapStateToProps)(CheckoutPage);