import {configureStore} from "@reduxjs/toolkit";
import booksAPI from "./booksAPI";
import {categoryParameter} from "./categoryParameter";
import {searchParameter} from "./searchParameter";
import {booksList} from "./booksList";
import {totalBooks} from "./totalBooks";
import {bookItem} from "./bookItem";
import {sortParameter} from "./sortParameter";
import {setLoadingState} from "./loading";
import {getBooks} from './asyncActions';

export const store = configureStore({
    reducer: {
        booksAPI,
        booksList,
        bookItem,
        totalBooks,
        categoryParameter,
        sortParameter,
        searchParameter,
        setLoadingState,
        getBooks,
    },
});
