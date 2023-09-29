import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move";

const MY_MOVE_WIN_OPTIONS = {
    [ROCK]: SCISSOR,
    [PAPER]: ROCK,
    [SCISSOR]: PAPER
}

const computeWin = (myMove: Move, computerMove: Move) => {
    return MY_MOVE_WIN_OPTIONS[myMove] === computerMove
}

export default computeWin;