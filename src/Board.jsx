import React, { useEffect, useState } from "react";
import Box from "./box";

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [Xturn, turnChange] = useState(true)

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let set of winner) {
            const [a, b, c] = set
            if (state[a] != null && state[a] === state[b] && state[a] === state[c])
                return alert(state[a] + " Is Winner")
        }
        return false

    }


    const iswinner = checkWinner();


    const ChangeState = (index) => {
        console.log(index)
        const Duplicate = [...state]
        if (Duplicate[index] === null) Duplicate[index] = Xturn ? 'X' : 'O';
        setState(Duplicate)
        turnChange(!Xturn)
    }

    return (

        <>
            {iswinner ? (<>Winner</>) : (<>
                <div className="row">
                    <Box onClick={() => ChangeState(0)} value={state[0]} />
                    <Box onClick={() => ChangeState(1)} value={state[1]} />
                    <Box onClick={() => ChangeState(2)} value={state[2]} />
                </div>
                <div className="row">
                    <Box onClick={() => ChangeState(3)} value={state[3]} />
                    <Box onClick={() => ChangeState(4)} value={state[4]} />
                    <Box onClick={() => ChangeState(5)} value={state[5]} />
                </div>
                <div className="row">
                    <Box onClick={() => ChangeState(6)} value={state[6]} />
                    <Box onClick={() => ChangeState(7)} value={state[7]} />
                    <Box onClick={() => ChangeState(8)} value={state[8]} />
                </div></>)
            }
        </>

    )

}


export default Board;