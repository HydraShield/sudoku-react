import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { changeGrid } from "../Services/Action";

const style = (i, j) => {
    if (i % 3 === 0 && j % 3 === 0) {
        return "top-left-border";
    }
    if (i % 3 === 0) {
        return "top-border";
    }
    if (j % 3 === 0) {
        return "left-border";
    }
    else {
        return "";
    }
}

const Tile = () => {

    const state = useSelector(state => state.root);
    const dispatch = useDispatch();

    return state.grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <div key={rowIndex + " " + colIndex} className={style(rowIndex, colIndex)}>
                    <input className={
                        state.intialPuzzle[rowIndex][colIndex] !== 0 ?
                            "initial" :
                            col !== 0 ? "tile taken" : "tile"
                    }
                        type="text"
                        value={col === 0 ? "" : col}
                        onChange = {(e) => dispatch(changeGrid(state, e, rowIndex, colIndex))}
                    />
                </div>
            )
        })
    })
}

export default Tile;