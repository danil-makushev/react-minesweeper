import { Tile } from '../Tile/Tile';

export function PlayingField(props) {
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
