import React from "react"


const Turn = (props) => {
    return (
        <>
            <div className="points">
                <h2>TURN</h2>
                <h3>{props.player}</h3>
            </div>
        </>
    )
}


export default Turn;