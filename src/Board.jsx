import React, { useEffect, useState } from "react";
import Box from "./box";
import Button from "./button";
import Prompt from "./Prompt";
import Points from "./points";
import Turn from "./turn";
import './index.css'





const Board = () => {


    var p1, p2

    const [state, setState] = useState(Array(9).fill(null));
    const [Xturn, turnChange] = useState(true)
    const [ShowModel, setModel] = useState(false)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [player1, setPlayer1] = useState('Player 1')
    const [player2, setPlayer2] = useState('Player 2')


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
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                state[a] === 'X' ? setCount1(count1 + 1) : setCount2(count2 + 1)
                setModel(true)
                return true
            }
        }
        return false

    }

    useEffect(() => {
        p1 = prompt('Enter Name of Player 1')
        if (p1 == "" || p1 == null) { setPlayer1("Player 1") } else { setPlayer1(p1.toUpperCase()) }
        p2 = prompt('Enter Name of Player 2')
        if (p2 == "" || p2 == null) { setPlayer2("Player 2") } else { setPlayer2(p2.toUpperCase()) }

    }, []);

    useEffect(() => {
        checkWinner();
    }, [Xturn])







    const reload = () => {
        setState(Array(9).fill(null))
    };

    const REMATCH = () => {
        setState(Array(9).fill(null))
        setModel(false)
    }




    const ChangeState = (index) => {
        const Duplicate = [...state]
        if (Duplicate[index] === null) {
            Duplicate[index] = Xturn ? 'X' : 'O';
            setState(Duplicate)
            turnChange(!Xturn)
        }
    }

    return (

        <>
            <div className="scores">
                <Points player={player1} points={count1} />
                <Turn player={Xturn ? player1 : player2} />
                <Points player={player2} points={count2} />
            </div>
            <div>
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
                </div>
            </div>

            <Button onClick={() => reload()} />
            {ShowModel && <Prompt player={Xturn ? player2 : player1} onClick={() => REMATCH()} />}

        </>

    )

}


export default Board;