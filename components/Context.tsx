"use client";

import { Move } from "@/constants/move";
import useComputer from "@/hooks/useComputer";
import useScore from "@/hooks/useScore";
import computeWin, { WinValue } from "@/utils/computeWin";
import { ReactNode, createContext, useState, useContext } from "react";

const ContextStore = createContext<{
    move: Move | undefined,
    onMove: (nextMove: Move) => void
    onClear: () => void
    score: number[]
    history: Move[][]
    computerMove: Move | undefined
} | undefined>(undefined);


// HOOKS
export const useContextStore = () => {
const context = useContext(ContextStore);

    if (context === undefined) {
        throw new Error("out of context")
    }
return context;
}

// COMPONENTS
interface ContextProps {
    children: ReactNode
}
const Context = ({children}: ContextProps) => {
    const [move, setMove] = useState<Move | undefined>();
    const [{score, history}, onScore] = useScore();
    const [computerMove, onComputerMove] = useComputer();



    const onMove = (move: Move) => {
        setMove(move);
        const computerMove = onComputerMove();
        onScore(move, computerMove);
    }

    const onClear = () => {
        setMove(undefined);
    }

    return <ContextStore.Provider value={{move, onMove, onClear, computerMove, score, history}}>{children}</ContextStore.Provider>;
}

export default Context