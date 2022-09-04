import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { clearPuzzle, createPuzzle, solvePuzzle, validatePuzzle } from "../Services/Action";

const Interface = () => {

    const state = useSelector(state => state.root);
    const dispatch = useDispatch()

    return (
        <div className="interface">
            <div className="info-interface">
                <input type="text" readOnly value={state.status} />
            </div>
            <div className="action-interface">
                <button className="generate-btn btn" onClick={() => dispatch(createPuzzle())}>Create</button>
                <button className="validate-btn btn" onClick={() => dispatch(validatePuzzle(state))}>Validate</button>
                <button className="solve-btn btn" onClick={() => dispatch(solvePuzzle(state))}>Solve</button>
                <button className="clear-btn btn" onClick={() => dispatch(clearPuzzle(state))}>Clear</button>
            </div>
        </div>
    );
}

export default Interface;