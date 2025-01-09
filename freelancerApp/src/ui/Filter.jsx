import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;
    function handleChange(value) {
        searchParams.set(filterField, String(value));
        setSearchParams(searchParams);
    }
    return (
        <div className="flex items-center gap-x-2 text-xs">
            <span className="font-bold">Status:</span>
            <div className="flex items-center gap-x-2 border border-secondary-100  rounded-lg">
                {options.map(({ value, label }) => {
                    const isActive = value === currentFilter;
                    return (
                        <button
                            onClick={() => handleChange(value)}
                            disabled={isActive}
                            className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                            ${isActive ? "!bg-primary-500" : "bg-secondary-200"}
                            `}
                            key={value}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Filter;
