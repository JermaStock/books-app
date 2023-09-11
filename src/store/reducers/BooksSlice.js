import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksPagination: [],
    books: [],
    isLoading: false,
    error: '',
    maxResults: 30,
    startIndex: 0,
    totalCount: 0,
    firstLoad: true,
    isEndIndex: false,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true;
            state.firstLoad = false;
        },
        booksFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.books = action.payload.items;
        },
        booksFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        changeBooksPage(state, action) {
            state.startIndex = action.payload;
        },
        createBooksPagination(state, action) {
            state.booksPagination = [...state.booksPagination, ...action.payload.items];
        },
        clearBooksPagination(state, action) {
            state.booksPagination = action.payload;
        },
        booksTotalCount(state, action) {
            state.totalCount = action.payload.totalItems;
        },
        booksEndIndex(state, action) {
            state.isEndIndex = action.payload;
        }
    }
});

export default booksSlice.reducer;