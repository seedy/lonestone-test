import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move"
import { ComponentProps } from "react"
import {Button, Icon} from "@chakra-ui/react"
import styles from "./index.module.scss"
import {FaHandRock, FaHandPaper, FaHandScissors} from "react-icons/fa";

const asIcons = {
    ROCK: FaHandRock,
    PAPER: FaHandPaper,
    SCISSOR: FaHandScissors,
} as const

interface ButtonChifumiProps extends ComponentProps<"button"> {
    variant: Move

}
const ButtonChifumi = ({variant, ...props}: ButtonChifumiProps) => {
    
    return (
  <Button h="auto" gap={2} w="auto" p={8} className={styles.root} {...props}>
    <Icon as={asIcons[variant]}/>

    {variant}
    </Button>
    )
}

export default ButtonChifumi;