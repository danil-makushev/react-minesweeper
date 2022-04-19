import { Difficulty } from '../../models';

export function ControlPanel() {
    return (
        <>
            <select name="cars" id="cars">
                <option value={Difficulty.BEGINNER}>Beginner</option>
                <option value={Difficulty.INTERMEDIATE}>Intermediate</option>
                <option value={Difficulty.EXPERT}>Expert</option>
            </select>
            <h1 className="text-lg font-bold">ControlPanel</h1>
        </>
    );
}
