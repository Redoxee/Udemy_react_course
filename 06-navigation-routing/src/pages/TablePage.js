import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        {name: 'Orange', color:'bg-orange-500', score:5},
        {name: 'Apple', color:'bg-red-500', score:2},
        {name: 'Banana', color:'bg-yellow-500', score:4},
        {name: 'Lime', color:'bg-green-500', score:6},
    ];

    const config = [
        {
            label: 'Fruit',
            render: (data) => data.name,
            sortValue: (data)=> data.name,

        },
        {
            label: 'Color',
            render: (data) => <div className={`p-3 mx-4 ${data.color}`}></div>,
        },
        {
            label: 'Score',
            render: (data) => data.score,
            sortValue: (data)=> data.score,
        },
    ];


    const dataKeyFunction = (item) => item.name;
    // const alternativeData = [
    //     {name: 'Truck', Price: 15000, discount: .1, img: 'truck.png'},
    //     {name: 'Car', Price: 7000, discount: .15, img: 'car.png'},
    //     {name: 'Boat', Price: 35000, discount: .02, img: 'boat.png'},
    // ];

    return <div><SortableTable data = {data} configs={config} dataKeyFunction={dataKeyFunction} /></div>
}

export default TablePage;