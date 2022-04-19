import { Tile } from '../Tile/Tile';

export interface PlayingFieldProps {
    width: number;
    height: number;
}

export function PlayingField(props: PlayingFieldProps) {
    return <>{generateField(props.width, props.height)}</>;
}

function generateField(width, height) {
    const field = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            field.push(<Tile key={`${i}-${j}`}></Tile>);
        }
        field.push(<br />);
    }
    return field;
}
