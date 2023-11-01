import React from "react";


export default function CustomInput() {

    const [value, setValue] = React.useState("");


    let CustomInput = (props) => {
        return (
            <div className="customInput">
                <div className="label">{props.label}</div>
                <div className="inputRow">
                    <input
                        type="text"
                        aria-label={props.ariaLabel}
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />
                </div>
            </div>
        )
    }


    return (
        <div className="customInput">
            <h1>Custom Input</h1>
            <div className="inputRow">
                <CustomInput
                    label="Custom Input"
                    ariaLabel="Custom Input"
                    value={value}
                    //what if we forgot one of these props?
                    onChange={setValue}
                />
            </div>
        </div>
    )
}