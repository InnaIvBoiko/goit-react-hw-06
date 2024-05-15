import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
    name: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const selectNameFilter = state => state.filters.name;
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;