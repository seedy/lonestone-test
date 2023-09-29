import { Move } from "@/constants/move";
import computeWin from "@/utils/computeWin";
import { Text } from "@chakra-ui/react";

interface WinTextProps {
    move: Move,
    computerMove: Move
}
const WinText = ({move, computerMove}: WinTextProps) => {
    const didIWin = computeWin(move, computerMove);

    if (didIWin === null) {
        return (
            <Text whiteSpace="nowrap" fontSize={22} fontWeight="bold" color="white">Draw !</Text>
        )
    }
    return didIWin ? <Text whiteSpace="nowrap" fontSize={22} fontWeight="bold" color="white">You win!</Text> : <Text whiteSpace="nowrap" fontSize={22} fontWeight="bold" color="white">Computer wins!</Text>
}

export default WinText