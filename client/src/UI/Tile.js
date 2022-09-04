import React from "react";

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

const Tile = ({ puzzle, grid, handleChange }) => {
    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <div key={rowIndex + " " + colIndex} className={style(rowIndex, colIndex)}>
                    <input className={
                        puzzle[rowIndex][colIndex] !== 0 ?
                            "initial" :
                            col !== 0 ? "tile taken" : "tile"
                    }
                        type="text"
                        value={col === 0 ? "" : col}
                        onChange={(e) => handleChange(rowIndex, colIndex, e)}
                    />
                </div>
            )
        })
    })
}

export default Tile;