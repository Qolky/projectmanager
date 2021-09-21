import React from "react";
import './header.css';

import Search from "./search/search";

export default function Header(){
    return(
        <div className={'Header'}>
            <Search/>
            <div className="HeaderProfile"></div>
        </div>
    )
}