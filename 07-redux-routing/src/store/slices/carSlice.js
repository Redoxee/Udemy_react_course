import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:'car',
    initialState:{
        searchTerm : '',
        data: []
    },
    reducers: {
        addCar(state, action) {
            state.data.push({
                ...action.payload,
                id: nanoid(),
            });
        },

        removeCar(state, action) {
            const updated = state.data.filter((car)=>car.id !== action.payload);
            state.data = updated;
        },

        changeSearch(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const { addCar, removeCar, changeSearch } = carSlice.actions;
export const carReducer = carSlice.reducer;