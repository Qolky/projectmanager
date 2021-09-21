import React from "react";
import './search.css';

import iconSearch from './img/search.svg';

export default function Search(){
    return(
        <div className={'Search'}>
            <img className={'iconSearch'} src={iconSearch} alt={''} onClick={()=>highlightSearch()}/>
            <input className={'inputSearch'} id={'inputSearch'} type={'text'} placeholder={'Search...'}/>
        </div>
    )
}

function highlightSearch(){
    const request = document.getElementById('inputSearch');
    request.focus();
    request.select();
}