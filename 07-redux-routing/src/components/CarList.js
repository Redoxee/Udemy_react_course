import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const {cars, currentName} = useSelector(({cars : {data, searchTerm}, form : {name}})=> {
            const lowerCasedSearch = searchTerm.toLowerCase();
            const filteredCars = data.filter((car) => {
                return car.name.toLowerCase().includes(lowerCasedSearch);
            });
            return {
                cars: filteredCars,
                currentName: name,
            }            
        })

    const handleRemove = (car)=> {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car)=>{
        const bold = currentName && car.name.toLowerCase().includes(currentName.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - €{car.cost}
                </p>

                <button className='button is-danger' onClick={()=>handleRemove(car)}>Delete</button>
            </div>
        );
    });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
}

export default CarList;