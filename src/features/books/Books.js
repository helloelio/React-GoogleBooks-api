import _ from "lodash";
import React from "react";
import notFound from './img/not-found.png';
import {
    Link
} from "react-router-dom";

function BookItems(props) {
    return (
        props.result.map(book => (
            <nav>
                <Link to={`book/${book.id}`} onClick={props.test} id={book.id}>
                    <div className='book'>
                        <img id={book.id} className='book__image'
                             src={_.get(book, "volumeInfo.imageLinks.thumbnail", `${notFound}`)}
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
    )
}

export default BookItems;