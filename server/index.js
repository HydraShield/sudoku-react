import express from "express";
import cors from "cors";
import { Sudoku } from "./Sudoku.js";
import { Util } from "./Util.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3030, () => {
    console.log("Server is running on port 3030");
});

app.get("/puzzle", (req, res) => {
    let sudoku = new Sudoku();
    res.status(200).send({ game: sudoku.puzzle });
});

app.post("/solve", (req, res) => {
    let puzzle = [];
    Util.copyGrid(req.body.board, puzzle);
    let sudoku = new Sudoku(puzzle);
    let solution = sudoku.isSolvable();
    let solvedSudoku;
    let status;
    if (solution) {
        solvedSudoku = sudoku.solvedPuzzle;
        status = true;
    } else {
        solvedSudoku = req.body.board;
        status = false;
    }
    res.status(200).send({ solution: solvedSudoku, status: status });
});

app.post("/validate", (req, res) => {
    let puzzle = [];
    Util.copyGrid(req.body.board, puzzle);
    let sudoku = new Sudoku(puzzle);
    let status = sudoku.validate();
    res.status(200).send({ status: status });
});