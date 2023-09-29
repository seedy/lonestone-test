"use client";

import { Move } from "@/constants/move";
import useScore from "@/hooks/useScore";
import { ReactNode, createContext, useState, useContext } from "react";

const ContextStore = createContext<{
    move: Move | undefined,
    setMove: (nextMove: Move) => void
    score: number[]
    history: boolean[]
    onScore: (didIWin: boolean) => void
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

    return <ContextStore.Provider value={{move, setMove, score, history, onScore}}>{children}</ContextStore.Provider>;
}

export default Context