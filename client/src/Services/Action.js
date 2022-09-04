import { CHANGE, CLEAR, CREATE, SOLVE, VALIDATE } from "./ActionsName";
import { REST } from "./Api"

const getEmptyGrid = () => {
    let grid = [];
    for (let i = 0; i < 9; i++) {
        grid.push(Array(9).fill(0));
    }
    return grid
}

const copy2DArray = (from, to) => {
    for (let i = 0; i < from.length; i++) {
        to[i] = [...from[i]];
    }
}

export const createPuzzle = () => async (dispatch) => {
    try {
        const response = await REST.getBoard();
        const data = await response.json();
        const temp = getEmptyGrid();
        copy2DArray(data.game, temp)
        dispatch({ type: CREATE, payload: { intialPuzzle: data.game, grid: temp, status: "" } });
    } catch (error) {
        console.error(error);
    }
}

export const solvePuzzle = (req) => async (dispatch) => {
    try {
        const response = await REST.solveBoard(req.grid);
        const data = await response.json();
        dispatch({ type: SOLVE, payload: { intialPuzzle: req.intialPuzzle, grid: data.solution, status: data.status ? "** SOLVED **" : "** UNSOLVABLE **" } });
    } catch (error) {
        console.error(error);
    }
}

export const validatePuzzle = (req) => async (dispatch) => {
    try {
        const response = await REST.validateBoard(req.grid);
        const data = await response.json();
        dispatch({ type: VALIDATE, payload: { intialPuzzle: req.intialPuzzle, grid: req.grid, status: data.status ? "** SOLVED **" : "** UNSOLVED **" } });
    } catch (error) {
        console.error(error);
    }
}

export const clearPuzzle = (req) => {
    const temp = getEmptyGrid();
    copy2DArray(req.intialPuzzle, temp)
    return { type: CLEAR, payload: { intialPuzzle: req.intialPuzzle, grid: temp, status: "CLEANED" } };
}

export const changeGrid = (req, e, i, j) => {
    const reg = /^[0-9\b]+$/;
    if ((e.target.value === "" || reg.test(e.target.value)) && req.intialPuzzle[i][j] === 0 && Number(e.target.value) < 10) {
        const newGrid = [...req.grid]
        newGrid[i][j] = Number(e.target.value);
        req = {...req, grid: newGrid};
    }
    return { type: CHANGE, payload: req }
}
