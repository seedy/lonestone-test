import { useState } from "react"

const useScore = () => {
    // tuple with my score first
    const [score, setScore] = useState([0, 0]);
    const [history, setHistory] = useState([] as boolean[]);

    const onScore = (didIWin: boolean) => {
        setHistory(prevHistory => [...prevHistory, didIWin]);
        setScore(([myScore, computerScore]) => {
            return didIWin ? [myScore++, computerScore] : [myScore, computerScore++];
        })
    }

    return [{score, history}, onScore] as const;
}

export default useScore;