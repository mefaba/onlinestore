import React from "react"
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg"
import "./cart-icon.unit.scss"
import { selectCartItemsCount } from "../../redux/cart/cart-selector";


const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    console.log("cart-icon is called")
    return{
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)


/* const mapStateToProps = (state) => {
    console.log("cart-icon is called")
    return{
        itemCount: state.cart.cartItems.reduce((accumulatedQuantity,cartItem)=>{
            return accumulatedQuantity + cartItem.quantity
        },0)
    }
} */