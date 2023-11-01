import React from "react";
import './typingStyles.scss';
import TSTypeExample from "./TSTypeExample";
import { importB } from "./TSTypeExample";


export default function TypeExample() {


    const addNumbers = (a, b) => {
        alert(a + b);
    }

    const b = 2;
    //what about if the variable is imported from another file?

    return (
        <div>
            <h1>Static Typing</h1>
            <div className="label">JS Calculator</div>
            <div className="inputRow">
                <button className="addButton" onClick={() => addNumbers(1, importB)}>Add</button>
            </div>

            <div className="label">TS Calculator</div>
            <TSTypeExample />
        </div>
    );
}