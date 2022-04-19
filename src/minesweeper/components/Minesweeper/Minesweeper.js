import { PlayingField } from '../PlayingField/PlayingField';
import { ControlPanel } from '../ControlPanel/ControlPanel';

export function Minesweeper() {
    const width = 10;
    const height = 20;
    return (
        <>
            <ControlPanel></ControlPanel>
            <PlayingField width={width} height={height}></PlayingField>
        </>
    );
}
