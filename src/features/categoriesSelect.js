import React from "react";

function categoriesSelect(props) {
    return(
        <div className='search__selects-categories'>
            <label htmlFor="categories">Categories</label>
            <select name="categories" id="categories" onChange={props.getCategorieParameter}>
                <option value="all">all</option>
                <option value="Art">art</option>
                <option value="Biography">biography</option>
                <option value="Computers">computers</option>
                <option value="History">history</option>
                <option value="Medical">medical</option>
                <option value="Poetry">poetry</option>
            </select>
        </div>
    )
}

export default categoriesSelect;