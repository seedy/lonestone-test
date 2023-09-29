import { Move } from "@/constants/move";
import computeWin, { WinValue } from "@/utils/computeWin";
import { useState } from "react"

const useScore = () => {
    // tuple with my score first
    const [score, setScore] = useState([0, 0]);
    const [history, setHistory] = useState([] as Move[][]);

    const onScore = (move: Move, computerMove: Move) => {
        const didIWin = computeWin(move, computerMove);
        setHistory(prevHistory => [...prevHistory, [move, computerMove]]);
        if (didIWin === null) {
            return;
        }
        setScore(([myScore, computerScore]) => {
            return didIWin ? [myScore+1, computerScore] : [myScore, computerScore+1];
        })
    }

    return [{score, history}, onScore] as const;
}

export default useScore;