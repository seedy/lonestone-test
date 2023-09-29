import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move"
import { ComponentProps } from "react"
import {Button} from "@chakra-ui/react"
import styles from "./index.module.scss"
import {FaHandRock, FaHandPaper, FaHandScissors} from "react-icons/fa";

interface ButtonChifumiProps extends ComponentProps<"button"> {
    variant: Move

}
const ButtonChifumi = ({variant, ...props}: ButtonChifumiProps) => {
    return (
  <Button className={styles.root} {...props}>
    {variant === ROCK && <FaHandRock />}
    {variant === PAPER && <FaHandPaper />}
    {variant === SCISSOR && <FaHandScissors />}

    {variant}
    </Button>
    )
}

export default ButtonChifumi;