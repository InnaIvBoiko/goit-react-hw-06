import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        changeFilter(state, action) {
            console.log(action.payload)
            return (state = action.payload);
        },
    },
});

export const selectNameFilter = state => state.filters;
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;