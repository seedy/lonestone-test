"use client";

import ButtonChifumi from "@/components/ButtonChifumi";
import { useContextStore } from "@/components/Context";
import { PAPER, ROCK, SCISSOR } from "@/constants/move";
import { ButtonGroup, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const Hand = () => {
    const {move, onMove, onClear, score} = useContextStore();
    
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
        <>
        <ButtonGroup spacing={[4, 4, 4, 8]}>
            <ButtonChifumi variant={ROCK} onClick={onClickRock} />
            <ButtonChifumi variant={PAPER} onClick={onClickPaper} />
            <ButtonChifumi variant={SCISSOR} onClick={onClickScissor} />
        </ButtonGroup>
        <Heading as="h2" fontSize={18} color="white" fontWeight="bold">
            You - {score[0]}
        </Heading>
        </>
    )
}

export default Hand