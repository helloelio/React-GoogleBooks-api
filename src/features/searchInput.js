import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function searchInput(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                onChange={props.getSearchParameter}
                className="search__input"
                type="text"
                placeholder="Enter the title of the book"
            />
            <input className="btn-search" type="submit" value="" />
            <FontAwesomeIcon className="btn-search" icon={faSearch} />
        </form>
    );
}

export default searchInput;
