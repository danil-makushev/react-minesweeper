import { Difficulty, GameState } from '.';

export interface MinesweeperState {
    gameState: GameState;
    difficulty: Difficulty;
    minesLeft: number;
}
