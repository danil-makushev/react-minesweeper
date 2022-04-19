import React from 'react';
import { GameState, Difficulty } from '../models';

export const initialState = {
    gameState: GameState.NEW,
    difficulty: Difficulty.BEGINNER,
    minesLeft: 10
};

export const MinesweeperContext = React.createContext(initialState);

export const MinesweeperContextProvider = (props) => (
    <MinesweeperContext.Provider value={initialState}>
        {props.children}
    </MinesweeperContext.Provider>
);
