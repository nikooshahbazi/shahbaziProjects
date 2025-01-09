import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ option, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const value = searchParams.get(filterField) || "";
    function handleChange(e) {
        searchParams.set(filterField, String(e.target.value));
        setSearchParams(searchParams);
    }
    return <Select onChange={handleChange} value={value} option={option} />;
}

export default FilterDropDown;
