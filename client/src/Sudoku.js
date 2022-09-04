import React, { useRef, useState } from "react";
import { REST } from "./Services/Api";
import Board from "./UI/Board";
import Interface from "./UI/Interface";

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

const Sudoku = () => {

    // const [grid, setGrid] = useState(getEmptyGrid);
    // const [puzzleStatus, setPuzzleStatus] = useState("");
    // const initialGrid = useRef(getEmptyGrid())

    // const handleCreate = async () => {
    //     try {
    //         const response = await REST.getBoard();
    //         const data = await response.json();
    //         return data.game;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const handleSolve = async () => {
    //     try {
    //         const response = await REST.solveBoard(grid);
    //         const data = await response.json();
    //         if (data.status) {
    //             setPuzzleStatus("** SOLVED **");
    //             return data.solution;
    //         } else {
    //             setPuzzleStatus("** UNSOLVABLE **")
    //             return grid;
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const handleValidate = async () => {
    //     try {
    //         const response = await REST.validateBoard(grid);
    //         const data = await response.json();
    //         return data.status;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const handleInterface = async (action) => {

    //     let newGrid;

    //     switch (action) {
    //         case "create":
    //             newGrid = await handleCreate();
    //             setPuzzleStatus("");
    //             setGrid(newGrid);
    //             copy2DArray(newGrid, initialGrid.current)
    //             break;
    //         case "solve":
    //             newGrid = await handleSolve();
    //             setGrid(newGrid);
    //             break;
    //         case "validate":
    //             const flag = await handleValidate();
    //             setPuzzleStatus(flag ? "** SOLVED **" : "** UNSOLVED **");
    //             break;
    //         case "clear":
    //             setPuzzleStatus("");
    //             newGrid = getEmptyGrid();
    //             copy2DArray(initialGrid.current, newGrid);
    //             setGrid(newGrid);
    //             break;
    //         default:
    //             throw new Error("Invalide Action");
    //     }
    // }

    // const handleChange = (i, j, e) => {
    //     const reg = /^[0-9\b]+$/;
    //     if ((e.target.value === "" || reg.test(e.target.value)) && initialGrid.current[i][j] === 0 && Number(e.target.value) < 10) {
    //         const newGrid = [...grid]
    //         newGrid[i][j] = Number(e.target.value);
    //         setGrid(newGrid);
    //     }
    // }

    return (
        <div className="Sudoku">
            <h2>HydraSudoku</h2>
            <Board />
            <Interface />
        </div>
    );
}

export default Sudoku;