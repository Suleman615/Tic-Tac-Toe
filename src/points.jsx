import React from "react";

const Points = (props) => {
    return (
        <><div className="points">
            <h2>{props.player}</h2>
            <h3>{props.points}</h3>
        </div>
        </>
    )
}



export default Points;
