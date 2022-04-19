import styles from './Tile.module.css';

export function Tile() {
    const clickHandler = ()=>{}
    return <span className={styles.tile} onClick={clickHandler}></span>;
}
