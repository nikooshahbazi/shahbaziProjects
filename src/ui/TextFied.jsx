function TextFied({
    label,
    name,
    register,
    validationSchema,
    required,
    errors,
}) {
    return (
        <div>
            <label className="mb-2 block text-secondary-700" htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <input
                id={name}
                {...register(name, validationSchema)}
                className="textField_input"
                type="text"
            />
            {errors && errors[name] && (
                <span className="text-error block text-sm mt-2">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    );
}

export default TextFied;
