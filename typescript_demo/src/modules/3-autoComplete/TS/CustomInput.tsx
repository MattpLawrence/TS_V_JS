import React from "react";


export default function CustomInput() {

    const [value, setValue] = React.useState("");

    interface ICustomInputProps {
        label: string;
        value: string;
        ariaLabel: string;
        onChange: (value: string) => void;
    }

    let CustomInput = (props: ICustomInputProps) => {
        return (
            <div className="customInput">
                <div className="label">{props.label}</div>
                <div className="inputRow">
                    <input
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
            <div className="label">Custom Input</div>
            <div className="inputRow">
                <CustomInput
                    label="Custom Input"
                    value={value}
                    ariaLabel="Custom Input"
                    onChange={setValue}
                />
            </div>
        </div>
    )
}