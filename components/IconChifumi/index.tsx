import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move";
import {Icon} from "@chakra-ui/react"
import {FaHandRock, FaHandPaper, FaHandScissors} from "react-icons/fa";


const asIcons = {
    [ROCK]: FaHandRock,
    [PAPER]: FaHandPaper,
    [SCISSOR]: FaHandScissors,
} as const

interface IconChifumiProps {
    variant: Move
}
const IconChifumi = ({variant}: IconChifumiProps) => (
    <Icon title={variant} aria-label={variant} as={asIcons[variant]}/>
)

export default IconChifumi