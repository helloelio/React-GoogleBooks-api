import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Books from "./features/books/Books";
import BookItem from "./features/book/BookItem";
import SortSelect from "./features/sortSelect";
import CategoriesSelect from "./features/categoriesSelect";
import SearchInput from "./features/searchInput";
import ErrorMessage from "./features/error/error";
import {useDispatch, useSelector} from "react-redux";
import {getBooksAction, loadBooksAction} from "./app/booksList";
import {getCategorieParameterAction} from "./app/categoryParameter";
import {sortParameterAction} from "./app/sortParameter";
import {getTotalBooksAction} from "./app/totalBooks";
import {getBookAction} from "./app/bookItem";
import {getSearchValueAction} from "./app/searchParameter";
import {loadingAction} from "./app/loading";
import LoadComp from "./features/loading/loading";
import {errorAction} from "./app/searchError";

function App() {
    const dispatch = useDispatch();
    const apiKey = useSelector((state) => state.booksAPI);
    const category = useSelector((state) => state.categoryParameter.category);
    const sortParameter = useSelector((state) => state.sortParameter.sort);
    const searchParameter = useSelector((state) => state.searchParameter.input);
    const books = useSelector((state) => state.booksList.books);
    const totalBooks = useSelector((state) => state.totalBooks.total);
    const book = useSelector((state) => state.bookItem.book);
    const maxResult = useSelector((state) => state.searchParameter.maxResult);
    const load = useSelector((state) => state.setLoadingState.load)
    const error = useSelector(state => state.searchError.error);

    function getSearchParameter(event) {
        dispatch(getSearchValueAction(event.target.value));
    }

    function getCategorieParameter(event) {
        dispatch(getCategorieParameterAction(event.target.value));
    }

    function sortBooks(event) {
        dispatch(sortParameterAction(event.target.value));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (searchParameter !== '') {
            dispatch(errorAction(false));
            if (!category || category === "all") {
                dispatch(loadingAction(true));
                axios
                    .get(
                        `https://www.googleapis.com/books/v1/volumes?q=${searchParameter}&orderBy=${sortParameter}&key=${apiKey}&maxResults=${maxResult}`
                    )
                    .then((data) => {
                        dispatch(getTotalBooksAction(data.data.totalItems));
                        dispatch(getBooksAction(data.data.items));
                        dispatch(loadingAction(false));
                    });
            } else {
                dispatch(loadingAction(true));
                axios
                    .get(
                        `https://www.googleapis.com/books/v1/volumes?q=${searchParameter}+subject=${category}&orderBy=${sortParameter}&key=${apiKey}&maxResults=${maxResult}`
                    )
                    .then((data) => {
                        dispatch(getTotalBooksAction(data.data.totalItems));
                        dispatch(getBooksAction(data.data.items));
                        dispatch(loadingAction(false));
                    });
            }
        } else {
            dispatch(errorAction(true))
        }
    }

    function getBook(event) {
        dispatch(loadingAction(true));
        axios.get(`https://www.googleapis.com/books/v1/volumes/${event.target.id}?key=${apiKey}`)
            .then((data) => {
                dispatch(getBookAction(data.data));
                dispatch(loadingAction(false));
            });
    }

    function handleLoadBooks() {
        if (!category || category === "all") {
            axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchParameter}&orderBy=${sortParameter}&key=${apiKey}&maxResults=${maxResult}`
            )
                .then((data) => {
                    dispatch(loadBooksAction(data.data.items));
                });
        } else {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchParameter}+subject=${category}&orderBy=${sortParameter}&key=${apiKey}&maxResults=${maxResult}`
                )
                .then((data) => {
                    dispatch(loadBooksAction(data.data.items));
                });
        }
    }

    return (
        <div className="App">
            <header id='header' className="header">
                <div className="shadow">
                    <a className="title-link" href="/">
                        <h1 className="search__title">Search for books</h1>
                    </a>
                    <SearchInput handleSubmit={handleSubmit} getSearchParameter={getSearchParameter}/>
                    {error && <ErrorMessage/>}
                    <div className="search__selects">
                        <CategoriesSelect getCategorieParameter={getCategorieParameter}/>
                        <SortSelect sortBooks={sortBooks}/>
                    </div>
                </div>
            </header>
            <main>
                {load ? (
                    <LoadComp/>
                ) : (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Books
                                    load={load}
                                    total={totalBooks}
                                    bookId={books.map((i) => i.id)}
                                    result={books}
                                    getBook={getBook}
                                    handleLoadBooks={handleLoadBooks}
                                    category={category}
                                />
                            }
                        />
                        <Route
                            path={`/book/:${book.id}`}
                            element={<BookItem key={book.id} book={book}/>}
                        />
                    </Routes>
                )}
                <a className='nav-arrow' href="#header"></a>
            </main>
        </div>
    );
}

export default App;
