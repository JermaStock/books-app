import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    book: {},
    isLoading: false,
    error: '',
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        bookFetching(state) {
            state.isLoading = true
        },
        bookFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.book = action.payload;
        },
        bookFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetBookState(state) {
            state.isLoading = false;
            state.book = {};
            state.error = '';
        }
    }
});

export default bookSlice.reducer;