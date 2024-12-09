import { useState } from "react";

function TextFied({ label, name, register }) {
    console.log(register);

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
                autoComplete="off"
            ></input>
        </div>
    );
}

export default TextFied;
