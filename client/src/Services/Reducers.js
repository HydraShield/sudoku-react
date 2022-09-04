import { CHANGE, CLEAR, CREATE, SOLVE, VALIDATE } from "./ActionsName";

const getEmptyGrid = () => {
    let grid = [];
    for (let i = 0; i < 9; i++) {
        grid.push(Array(9).fill(0));
    }
    return grid
}

const initState = { intialPuzzle: getEmptyGrid(), grid : getEmptyGrid(), status: ""}

export const InterfaceReducer = (state=initState, action) => {

    const {type, payload} = action;

    switch (type) {
        case CREATE:
            console.log(payload);
            return payload;
        case SOLVE:
            return payload;
        case VALIDATE:
            return payload;
        case CLEAR:
            return payload;
        case CHANGE:
            return payload;
        default:
            return state;
    }
}