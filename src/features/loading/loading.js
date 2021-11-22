import React from "react";
import loadingImage from './img/loading.gif'

function loadComp() {
    return (
        <div className='loading-block'>
            <img src={loadingImage} alt=""/>
        </div>
    );
}

export default loadComp;
