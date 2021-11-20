import React, {useState} from 'react';
import BookItem from './features/book/BookItem';

// TODO: заспределить по компонентам, рефактор, сортировка,

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import BooksCounter from "./features/books/BooksCounter";
import Books from "./features/books/Books";

let maxResult = 30;

function App() {
    const [books, setBooks] = useState("");
    const [result, setResult] = useState([]);
    const [total, setTotal] = useState("");
    const [apiKey] = useState("AIzaSyDftZCXJ1dcrgw9UX-PaH3D4UtI3TnXO3c");
    const [book, setBook] = useState("");

    function handleChange(event) {
        const book = event.target.value;
        setBooks(book)
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${books}&key=${apiKey}&maxResults=30`)
            .then(data => {
                result.push(data.data.items);
                setTotal(data.data.totalItems);
                setResult(data.data.items);
            })
    }

    function test(event) {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${event.target.id}?key=AIzaSyDftZCXJ1dcrgw9UX-PaH3D4UtI3TnXO3c`)
            .then(data => {
                setBook(data.data);
            })
    }

    function handleLoadBooks() {
        console.log(maxResult);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=${maxResult += 10}`)
            .then(data => {
                setResult(data.data.items);
            })
    }

    return (
        <div className="App">
            <header className='header'>
                <div className="shadow">
                    <h1 className='search__title'>Search for books</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            className='search__input'
                            type="text"
                            placeholder='Enter book name'/>
                        <FontAwesomeIcon className='btn-search' icon={faSearch}/>
                        <input className='btn-search' type='submit' value=''/>
                    </form>
                    <div className='search__selects'>
                        <div className='search__selects-categories'>
                            <label htmlFor="categories">Categories</label>
                            <select name="categories" id="categories">
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="medical">medical</option>
                                <option value="poetry">poetry</option>
                            </select>
                        </div>
                        <div className='search__selects-sort'>
                            <label htmlFor="sorting">Sorting by</label>
                            <select name="sorting" id="sorting">
                                <option value="relevance ">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <BooksCounter total={total}/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Books total={total} result={result} key={result.map(i => i.id)} test={test} bookId={book}/>}/>
                        <Route path={`/book/:${book.id}`} element={<BookItem book={book}/>}/>
                    </Routes>
                </BrowserRouter>
                <div className='load-button'>
                    {result.length > 0 &&
                    <button onClick={handleLoadBooks} className='load-books'> Load more...</button>
                    }
                </div>
            </main>
        </div>
    );
}

export default App;
