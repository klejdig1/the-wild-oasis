import Select from "./Select.jsx";
import {useSearchParams} from "react-router-dom";


function SortBy({options}){
    const [searchParams,setSearchParams]=useSearchParams();
    const sortBy=searchParams.get('sortBy') || ''

    function handleChange(e){
        searchParams.set('sortBy',e.target.value)
        setSearchParams(searchParams)

    }

    return(
            <Select onChange={handleChange} options={options} type='white' value={sortBy}/>
    )
}


export default SortBy;