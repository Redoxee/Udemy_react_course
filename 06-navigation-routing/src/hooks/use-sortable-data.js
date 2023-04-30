
import { useState } from "react";

function useSortableData(data, configs) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const updateSort = (label) => {
        if (label !== sortBy) {
            setSortBy(label);
            setSortOrder('asc');
            return;
        }

        if(sortOrder === null) {
            setSortOrder('asc');
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
        }
        else {
            setSortOrder(null);
            setSortBy(null);
        }
    };
    
    let sortedData = data;
    if (sortBy !== null && sortOrder !== null) {
        const sortValue = configs.find((item)=>item.label === sortBy).sortValue;
        sortedData = [...data].sort((a, b)=>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const factor = sortOrder === 'desc' ? -1 : 1;
            if (typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * factor;
            }

            return (valueA - valueB) * factor;
        });
    }

    return {updateSort, sortedData, sortBy, sortOrder};
}

export default useSortableData;