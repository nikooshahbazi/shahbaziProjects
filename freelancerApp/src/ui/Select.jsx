function Select({ value, onChange, option }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="textField__input py-2 text-sm"
        >
            {option.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
