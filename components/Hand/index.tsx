"use client";

import ButtonChifumi from "@/components/ButtonChifumi";
import { useContextStore } from "@/components/Context";
import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move";
import { ButtonGroup } from "@chakra-ui/react";
import { useEffect } from "react";

interface HandProps {
    move: Move | undefined,
    setMove: (nextMove: Move | undefined) => void
}
const Hand = () => {
    const {move, onMove, onClear} = useContextStore();
    
    const onClickPaper = () => {
        onMove(PAPER);
    }

    const onClickScissor = () => {
        onMove(SCISSOR)
    }

    const onClickRock = () => {
        onMove(ROCK);
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (move) {
            timeout = setTimeout(() => {
                onClear();
            }, 3000)
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [move, onClear])

    if (move) {
        return null;
    }

    return (
        <ButtonGroup spacing={8}>
            <ButtonChifumi variant={ROCK} onClick={onClickRock} />
            <ButtonChifumi variant={PAPER} onClick={onClickPaper} />
            <ButtonChifumi variant={SCISSOR} onClick={onClickScissor} />
        </ButtonGroup>
    )
}

export default Hand