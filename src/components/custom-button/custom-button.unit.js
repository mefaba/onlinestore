import React from "react"

import "./custom-button.unit.scss"


const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    /* console.log(children)
    console.log(otherProps) */
    /* console.log(isGoogleSignIn) */
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;