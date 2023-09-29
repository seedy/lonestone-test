"use client"

import CardChifumi from "@/components/CardChifumi";
import { useContextStore } from "@/components/Context";
import WinText from "@/components/WinText";
import { Button, Flex, Text } from "@chakra-ui/react";

const Result = () => {
    const {move, computerMove, onClear} = useContextStore();

    if (!move || !computerMove) {
        return null;
    }


    return (
        <Flex gap={8} align="center">
        <Flex direction="column">
            <CardChifumi variant={computerMove}/>
            <CardChifumi variant={move} />
        </Flex>
        <Flex gap={4} direction="column">
        <WinText move={move} computerMove={computerMove}/>
        <Button colorScheme="blackAlpha" onClick={onClear}>Continue</Button>
        </Flex>
        </Flex>
    )
}

export default Result;