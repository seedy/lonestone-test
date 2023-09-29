"use client"

import CardChifumi from "@/components/CardChifumi";
import { useContextStore } from "@/components/Context";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const Result = () => {
    const {move, computerMove, onComputerMove, setMove} = useContextStore();


    useEffect(() => {
        if (move) {
            onComputerMove();
            setTimeout(() => {
                setMove(undefined);
            }, 3000);
        }
    }, [move, setMove, onComputerMove])

    if (!move || !computerMove) {
        return null;
    }

    return (
        <Flex direction="column">
            <CardChifumi variant={computerMove}/>
            <CardChifumi variant={move} />
        </Flex>
    )
}

export default Result;