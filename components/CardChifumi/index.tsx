import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move"
import { ComponentProps } from "react"
import styles from "./index.module.scss"
import {FaHandRock, FaHandPaper, FaHandScissors} from "react-icons/fa";

interface CardChifumiProps extends ComponentProps<"div"> {
    variant: Move

}
const CardChifumi = ({variant, ...props}: CardChifumiProps) => {
    return (
    <div className={styles.root} {...props}>
      {variant === ROCK && <FaHandRock />}
      {variant === PAPER && <FaHandPaper />}
      {variant === SCISSOR && <FaHandScissors />}
      {variant}
    </div>
    )
}

export default CardChifumi;