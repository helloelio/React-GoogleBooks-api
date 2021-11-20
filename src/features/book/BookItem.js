import _ from "lodash";
import React from "react";
import notFound from '../books/img/not-found.png';


function book(props) {
    return (
        <div className='book-item'>
            {!_.isEmpty(props) &&
            <div className='single-book'>
                <div className='book-image'>
                    <img src={_.get(props.book.volumeInfo, "imageLinks.thumbnail", `${notFound}`)} alt=""/>
                </div>
                <div className='book-description'>
                    <div className='book-content'>
                        <p className='book-categories'>{_.get(props.book.volumeInfo, "categories")}</p>
                        <p className='book-title'>{_.get(props.book.volumeInfo, "title")}</p>
                        <p className='book-authors'>{_.get(props.book.volumeInfo, "authors")}</p>
                        <a className='book-link' target='_blank' rel="noreferrer" href={_.get(props.book.volumeInfo, 'infoLink')}>View on Google Play</a>
                    </div>
                </div>
            </div>
            }
        </div>

    );
}

export default book;