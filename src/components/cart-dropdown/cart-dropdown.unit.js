import React from "react"
import { connect } from "react-redux"
import CustomButton from "../custom-button/custom-button.unit"
import CartItem from "../cart-item/cart-item.unit.js"
import { withRouter } from "react-router-dom"



import "./cart-dropdown.unit.scss"
import { toggleCartHidden } from "../../redux/cart/cart-action"


const CartDropDown = ({cartItems, history, dispatch}) => {
 return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/> ))
                :(
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        <CustomButton 
        onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden())
        }}>GO TO CHECK OUT</CustomButton>

    </div>)
}

const mapStateToProps = ({ cart:{cartItems}}) => ({
    cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));