import React from "react";

function booksCounter(props){
    return (
        <div className='total-books'>
            {props.total !== '' &&
            <h3> Found {props.total} results </h3>
            }
        </div>
    )
}
export default booksCounter;