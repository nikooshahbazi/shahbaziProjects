import { useState } from "react";

function TextFied({ label, name, value, onChange }) {
    return (
        <div>
            <label className="mb-2 block " htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name="name"
                className="textField_input"
                type="text"
                value={value}
                onChange={onChange}
                autoComplete="off"
            ></input>
        </div>
    );
}

export default TextFied;
