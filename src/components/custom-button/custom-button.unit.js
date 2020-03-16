import React from "react"

import "./custom-button.unit.scss"


const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    /* console.log(children)
    console.log(otherProps) */
    /* console.log(isGoogleSignIn) */
    return(
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;