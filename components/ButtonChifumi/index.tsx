import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move"
import { ComponentProps } from "react"
import {Button} from "@chakra-ui/react"
import styles from "./index.module.scss"
import IconChifumi from "@/components/IconChifumi";

interface ButtonChifumiProps extends ComponentProps<"button"> {
    variant: Move

}
const ButtonChifumi = ({variant, ...props}: ButtonChifumiProps) => {
    
    return (
  <Button colorScheme="blackAlpha" h="auto" gap={2} w="auto" p={[4, 4, 4, 8]} className={styles.root} {...props}>
    <IconChifumi variant={variant}/>

    {variant}
    </Button>
    )
}

export default ButtonChifumi;