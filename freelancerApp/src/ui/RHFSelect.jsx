function RHFSelect({ name, label, register, options, required }) {
    // console.log(options);
    return (
        <div>
            <label className="mb-2 block text-secondary-700" htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <select id="name" className="textField_input" {...register(name)}>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default RHFSelect;
