import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function searchInput(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <input
                onChange={props.getSearchParameter}
                className='search__input'
                type="text"
                placeholder='Enter book name'/>
            <FontAwesomeIcon className='btn-search' icon={faSearch}/>
            <input className='btn-search' type='submit' value=''/>
        </form>
    )
}

export default searchInput;