import { Fragment } from "react";

function Table({data, configs, dataKeyFunction}) {
    const renderedHeaderItems = configs.map((column) => 
    {
        if(column.header)
        {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>
    }
    );
    const renderedElements = data.map((item) => {
        const renderedContent = configs.map((column)=>
            <td className="p-3" key={column.label}>{column.render(item)}</td>
        );

        return <tr key={dataKeyFunction(item)} className="border-b">
            {renderedContent}
        </tr>
    });

    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
            {renderedHeaderItems}
            </tr>
        </thead>
        <tbody>{renderedElements}</tbody>
    </table>
}

export default Table;