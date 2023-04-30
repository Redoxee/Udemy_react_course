import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

import useSortableData from "../hooks/use-sortable-data";
import Table from "./Table";

function SortableTable(props) {
    const {data ,configs} = props;

    const {updateSort, sortedData, sortBy, sortOrder} = useSortableData(data, configs);

    const updatedConfigs = configs.map((config)=> {
        if (!config.sortValue) {
            return config;
        }

        return {
            header : ()=><th onClick={() => updateSort(config.label)} className="cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center">
                        {getIcons(config.label, sortBy, sortOrder)}
                        {config.label}
                    </div>
                </th>,
            ...config
        }
    });

    return <Table {...props} data= { sortedData } configs={updatedConfigs} />
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp />
        </div>;
    }

    return <div>
        <GoArrowSmallDown />
    </div>;
}

export default SortableTable;