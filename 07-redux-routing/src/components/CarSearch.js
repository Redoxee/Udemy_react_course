import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store";

function CarSearch() {
    const dispatch = useDispatch();
    
    const searchTerm = useSelector((state)=>{
        return state.cars.searchTerm;
    });

    const handleOnChangeSearch = (event)=>{
        dispatch(changeSearch(event.target.value));
    };

    return <div className="lest-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
            </div>

            <input className="input" 
                value={searchTerm}
                onChange={handleOnChangeSearch}
            />
        </div>
}

export default CarSearch;