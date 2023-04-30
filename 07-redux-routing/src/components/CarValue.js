import { useSelector } from 'react-redux';

function CarValue() {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const loweredSearch = searchTerm.toLowerCase();
        const filteredCars = data.filter((car)=> {
            return car.name.toLowerCase().includes(loweredSearch);
        });

        return filteredCars.reduce((acc, car)=>acc + car.cost, 0);
    });

    return <div className='car-value'>
        Total cost: €{totalCost}
    </div>
}

export default CarValue;