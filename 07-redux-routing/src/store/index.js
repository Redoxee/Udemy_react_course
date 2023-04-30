import { configureStore } from "@reduxjs/toolkit";
import { carReducer, addCar, removeCar, changeSearch } from "./slices/carSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer:{
        cars : carReducer,
        form : formReducer,
    }
});


export {
    store,
    changeName,
    changeCost,
    changeSearch,
    addCar,
    removeCar,
}