import React from 'react';

export const importB = '5';

export default function TSTypeExample() {

    const addNumbers = (a: number, b: number) => {
        alert(a + b);
    }

    return (
        <div className="tsTypeExample">
            <div className="inputRow">
                <button className="addButton" onClick={() => addNumbers(1, 1)}>Add</button>
            </div>
        </div>
    )
}