import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from './reducers/BooksSlice';
import bookReducer from './reducers/BookSlice';

const rootReducer = combineReducers({
    booksReducer,
    bookReducer    
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
};