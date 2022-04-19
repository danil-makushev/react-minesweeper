import { PlayingField } from '../PlayingField/PlayingField';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { useState } from 'react';
import { MinesweeperContextProvider } from '../../context/MinesweeperContext';

export function Minesweeper() {
    const [width] = useState(9);
    const [height] = useState(9);


    return (
        <MinesweeperContextProvider>
            <ControlPanel></ControlPanel>
            <PlayingField width={width} height={height}></PlayingField>
        </MinesweeperContextProvider>
    );
}
