import React from "react";
import { concatStrings } from "./concatStrings";

export default function UseConcactStrings() {
    return (
        <div className="useConcatStrings">
            <h1>Update methods</h1>
            <div className="label">JS Concat strings</div>
            <div className="inputRow">
                <button className="addButton" onClick={() => concatStrings('hello', 'world')}>Concatenate Strings</button>
            </div>
        </div>
    )
}