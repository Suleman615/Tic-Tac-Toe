import React from "react";
import './index.css'


const Box = (props) => {
    
    return (
        <>
            <div onClick={props.onClick} className="box">
                <p>{props.value}</p>
            </div>
        </>
    )
}



export default Box;