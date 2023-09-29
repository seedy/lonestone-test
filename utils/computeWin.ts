import { Move, PAPER, ROCK, SCISSOR } from "@/constants/move";

const MY_MOVE_WIN_OPTIONS = {
    [ROCK]: SCISSOR,
    [PAPER]: ROCK,
    [SCISSOR]: PAPER
}

export type WinValue = null | boolean

const computeWin = (myMove: Move, computerMove: Move): WinValue => {
    const draw = myMove === computerMove;
    if (draw) {
        return null;
    }
    return MY_MOVE_WIN_OPTIONS[myMove] === computerMove
}

export default computeWin;