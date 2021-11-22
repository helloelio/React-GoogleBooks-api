import React from "react";

function sortSelect(props) {
    return (
        <div className="search__selects-sort">
            <label htmlFor="sorting">Sorting by</label>
            <select name="sorting" id="sorting" onChange={props.sortBooks}>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </div>
    );
}

export default sortSelect;
