import _ from "lodash";
import React from "react";
import notFound from './img/not-found.png';
import {
    Link
} from "react-router-dom";
import BooksCounter from "./BooksCounter";

function BookItems(props) {
    return (
        <div className='book-items'>
            <BooksCounter total={props.total}/>
            {
                props.result.map(book => (
                    <nav>
                        <Link to={`book/${book.id}`} onClick={props.getBook} id={book.id} key={book.id}>
                            <div className='book'>
                                <img id={book.id} className='book__image'
                                     src={_.get(book, "volumeInfo.imageLinks.thumbnail", `${notFound}`)}
                                     alt='asd'
                                />
                                <div className='book__description'>
                                    <p className='book__categories'>{_.get(book, "volumeInfo.categories", '')}</p>
                                    <p className='book__title'>{_.get(book, "volumeInfo.title", '')}</p>
                                    <p className='book__authors'>{_.get(book, "volumeInfo.authors", '')}</p>
                                </div>
                            </div>
                        </Link>
                    </nav>
                ))
            }
            <div className='load-button'>
                {props.result.length > 0 &&
                <button onClick={props.handleLoadBooks} className='load-books'> Load more...</button>
                }
            </div>
        </div>
    )
}

export default BookItems;