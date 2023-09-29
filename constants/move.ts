export const ROCK = "ROCK" as const;
export const PAPER = "PAPER" as const;
export const SCISSOR = "SCISSOR" as const;

export type Move = typeof ROCK | typeof PAPER | typeof SCISSOR

const MOVES = [ROCK, PAPER, SCISSOR];

export default MOVES;