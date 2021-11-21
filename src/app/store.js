import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import booksAPI from "./booksAPI";
import {categorieParameter} from './categorieParameter'
import {searchParameter} from "./searchParameter";
import {booksList} from "./booksList";
import {totalBooks} from "./totalBooks";
import {bookItem} from "./bookItem";

export const store = configureStore({
    reducer: {
        booksAPI,
        booksList,
        bookItem,
        totalBooks,
        categorieParameter,
        searchParameter,
        counter: counterReducer,
    },
});
