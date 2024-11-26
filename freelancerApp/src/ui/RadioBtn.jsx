function RadioBtn({ name, id, onChange, value, label, checked }) {
    return (
        <div>
            <div className="flex items-center gap-x-2 text-secondary-600">
                <input
                    className="cursor-pointer w-4 h-4 accent-primary-900"
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                />
                <label htmlFor="owner">{label}</label>
            </div>
        </div>
    );
}

export default RadioBtn;
