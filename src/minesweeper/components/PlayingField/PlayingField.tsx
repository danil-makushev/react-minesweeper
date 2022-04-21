import { Tile } from '../Tile/Tile';

export interface PlayingFieldProps {
    width: number;
    height: number;
}

export function PlayingField(props: PlayingFieldProps) {
    return <>{generateField(props.width, props.height)}</>;
}

/** Generate empty playing field */
function generateField(width: number, height: number) {
    const field = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            field.push(<Tile key={`${i}-${j}`}></Tile>);
        }
        field.push(<br />);
    }
    return field;
}

function setMines(
    width: number,
    height: number,
    minesAmount: number,
    startX: number,
    startY: number
) {
    // randomly place {minesAmount} of mines in 2D array avoiding {startX} and {startY}
    // calculate adjacent mines for each non-mine cell
    // run evalTile() for the start cell
}

/** */
function evalTile(x: number, y: number){
    // if mine
    // show mine, end game
    // check neighbors
    // if mineCount > 0
    // show mineCount
    // else
}

function isMine(){}

function isValid(){}