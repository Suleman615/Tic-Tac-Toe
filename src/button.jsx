import React from "react";


const Button = (props) => {
    return (
        <>
            <button onClick={props.onClick}  className="btn">RESET</button>
        </>
    )
}


export default Button;