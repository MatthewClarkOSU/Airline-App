import React from 'react'
import "../styles.css"

const AllianceFilterCheckbox = ({ name, label, value, onValueChange }) => {

    const handleChange = (e) => {
        onValueChange(e.target.checked);
    };

    return (
        <label id={`${name}-checkbox`}>
            <input value={name} checked={value} type="checkbox" onChange={handleChange} />
            {label}
        </label>
    );
}

export default AllianceFilterCheckbox
