"use client"
import { useContextStore } from "@/components/Context"
import { Heading } from "@chakra-ui/react"

const ComputerHand = () => {
    const {score} = useContextStore();
    return (
        <Heading as="h2" fontSize={18} color="white" fontWeight="regular">
            Computer - {score[1]}
        </Heading>
    )
}

export default ComputerHand