import React from "react";


const Prompt = (props) => {

  return (

    <>
      <div className="prompt">
        <div className="insideprompt">
        <h1>{props.player} WON</h1>
        <button onClick={props.onClick}>OK</button>
        </div>
      </div>
    </>
  )
}


export default Prompt