"use client";

import ButtonChifumi from "@/components/ButtonChifumi";
import { useContextStore } from "@/components/Context";
import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move";
import { ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface HandProps {
    move: Move | undefined,
    setMove: (nextMove: Move | undefined) => void
}
const Hand = () => {
    const {move, setMove, onComputerMove , onScore} = useContextStore();
    
    const onClickPaper = () => {
        setMove(PAPER);
    }

    const onClickScissor = () => {
        setMove(SCISSOR)
    }

    const onClickRock = () => {
        setMove(ROCK);
    }

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