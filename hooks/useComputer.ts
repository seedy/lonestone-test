import MOVES, { Move } from "@/constants/move";
import { useState } from "react";

const useComputer = () => {
    const [computerMove, setComputerMove] = useState<Move | undefined>();

    const onMove = () => {
        const randomMove = MOVES[Math.floor(Math.random() * MOVES.length)];
        setComputerMove(randomMove);
        return randomMove
    }

    return [computerMove, onMove] as const
}

export default useComputer