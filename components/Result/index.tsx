"use client"

import CardChifumi from "@/components/CardChifumi";
import { useContextStore } from "@/components/Context";
import computeWin from "@/utils/computeWin";
import { Flex, Text } from "@chakra-ui/react";
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

    const didIWin = computeWin(move, computerMove);


    return (
        <Flex gap={8} align="center">
        <Flex direction="column">
            <CardChifumi variant={computerMove}/>
            <CardChifumi variant={move} />
        </Flex>
        {didIWin === null ? <Text>Draw !</Text> : (
            <>
                {didIWin ? <Text>You win !</Text> : <Text>Computer wins !</Text>}
            </>
        )}
        </Flex>
    )
}

export default Result;